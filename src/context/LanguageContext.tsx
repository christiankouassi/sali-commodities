import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, TRANSLATIONS, getTranslations } from '../data/translations';

export type Language = 'EN' | 'FR' | 'ES';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to 'EN' as requested by the patron
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sali_lang') as Language;
      if (saved && (saved === 'EN' || saved === 'FR' || saved === 'ES')) {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'EN';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('sali_lang', newLang);
    } catch (e) {
      // ignore
    }
  };

  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      lang: 'EN',
      setLang: () => {},
      t: TRANSLATIONS.EN
    };
  }
  return context;
}
