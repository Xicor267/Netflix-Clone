import { FunctionComponent, useEffect, useState } from "react";
import iconNetflix from "../../../assets/image/netflix-icon.png";
import { LanguageContextType, useLanguage } from "../../../locales/locale";
import "./Login.scss";
import { Checkbox, Input } from "antd";
import { Dropdown } from "../../component/dropdown/Dropdown";

interface ILogin {

}

export const Login: FunctionComponent<ILogin> = (props) => {
    const { i18n, language, setLanguage }: LanguageContextType = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState<string>(language);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSelectedLanguage(language);
    }, [language]);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedLang = e.target.value;
        setSelectedLanguage(selectedLang);
        setLanguage(selectedLang);
    };

    const handleOpenSpan = () => {
        setIsOpen(prev => !prev);
    }

    const getLanguageOption = [
        {
            value: "en",
            labelKey: "login.english"
        },
        {
            value: "vi",
            labelKey: "login.vietnamese"
        },
        {
            value: "ch",
            labelKey: "login.chinese"
        },
        {
            value: "ja",
            labelKey: "login.japanese"
        },

    ]

    return (
        <div className="login-container">
            {/* Header */}
            <div className="login-header">
                <div className="login-icon">
                    <img src={iconNetflix} style={{ width: 150, height: 50 }} />
                </div>
                <Dropdown
                    selectKey={selectedLanguage}
                    onChange={handleLanguageChange}
                    languageOptions={getLanguageOption}
                    className="login-language"
                />
            </div >

            {/* Form */}
            <div className="login-form">
                <div className="login-form-detail">
                    <div className="login-form-title">
                        {i18n('login.page')}
                    </div>
                    <div className="login-content">
                        <div className="login-form-input">
                            <input className="login-form-input-text" type="text" required={true} />
                            <label className="login-form-input-label">{i18n("login.page.placeholder.email")}</label>
                        </div>
                        <div className="login-form-input">
                            <input className="login-form-input-text" type="password" required={true} />
                            <label className="login-form-input-label">{i18n("login.page.placeholder.password")}</label>
                        </div>
                        <button className="login-form-login-button">
                            {i18n('login.page')}
                        </button>
                        <div className="login-form-or-something">{i18n('login.page.or.something')}</div>
                        <button className="login-form-login-button code">
                            {i18n('login.page.using.login.code')}
                        </button>
                        <a className="login-form-forgot-password" href="/LoginHelp">{i18n('login.page.forgot.password')}</a>
                    </div>
                    <Checkbox className="login-page-checkbox">{i18n("login.page.forgot.checkbox")}</Checkbox>
                    <div className="login-page-register">
                        {i18n('login.page.new.user')}
                        <a href="https://www.netflix.com/vn-en/" style={{ color: "#ffffff", fontWeight: 500, textDecoration: "none", paddingLeft: 5 }}>{i18n('login.page.register')}</a>
                    </div>
                    <div className="login-page-hint">
                        <p style={{ margin: "13px 0" }}>
                            {i18n('login.page.hint')}
                            <button onClick={() => handleOpenSpan()} className="login-page-learn-more">{i18n("login.page.learn.more")}</button>
                        </p>
                        {isOpen && <span>{i18n("login.page.learn.more.content")}</span>}
                    </div>
                </div>
            </div>
        </div >
    )
}