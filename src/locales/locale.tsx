import { FunctionComponent, ReactNode, createContext, useContext, useState } from "react";
import en from './english.json';
import vi from './vietnamese.json';
import ch from './china.json';
import ja from './japan.json';

interface ITranslation {
    [key: string]: string;
}

export interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => any;
    i18n: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: { [key: string]: ITranslation } = {
    en,
    vi,
    ch,
    ja
}

export const LanguageProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('vi');

    const i18n = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, i18n }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};