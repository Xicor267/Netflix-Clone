import { FunctionComponent } from "react";
import { LanguageContextType, useLanguage } from "../../../locales/locale";

interface IDropdown {
    selectKey?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
    className?: string
    languageOptions?: { value: string; labelKey: string }[];
}

export const Dropdown: FunctionComponent<IDropdown> = (props) => {
    const {languageOptions} = props;
    const { i18n, language, setLanguage }: LanguageContextType = useLanguage();

    return (
        <select value={props.selectKey} onChange={props.onChange} className={props.className}>
            {languageOptions?.map(option => (
                <option key={option.value} value={option.value}>
                    {i18n(option.labelKey)}
                </option>
            ))}
        </select>
    )
}