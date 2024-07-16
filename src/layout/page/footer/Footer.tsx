import { FunctionComponent, useState } from "react";
import { LanguageContextType, useLanguage } from "../../../locales/locale";
import { FooterList } from "./custom/FooterList";
import { Dropdown } from "../../component/dropdown/Dropdown";
import "./Footer.scss";

interface IFooter {

}

export const Footer: FunctionComponent<IFooter> = (props) => {
    const { i18n, language, setLanguage }: LanguageContextType = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedLang = e.target.value;
        setSelectedLanguage(selectedLang);
        setLanguage(selectedLang);
    };

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

    const itemList = [
        {
            title: i18n("login.page.footer.question")
        },
        {
            title: i18n("login.page.footer.cookie.option")
        },
        {
            title: i18n("login.page.footer.support.center")
        },
        {
            title: i18n("login.page.footer.enterprise.infomation")
        },
        {
            title: i18n("login.page.footer.policy")
        },
        {
            title: i18n("login.page.footer.more.personal.role")
        },
    ]

    return (
        <div className="footer-container">
            <div className="footer-item">
                <div className="footer-contact">{i18n("login.page.footer.contact")}</div>
                <div className="footer-list">
                    {itemList.map((item) => {
                        return (
                            <FooterList items={item.title} />
                        )
                    })}
                    <Dropdown
                        selectKey={selectedLanguage}
                        onChange={handleLanguageChange}
                        languageOptions={getLanguageOption}
                        className="login-language"
                    />
                </div>
            </div>
        </div>
    );
}