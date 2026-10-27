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
  // Determine initial language: check URL query parameter (?lang=fr / ?lang=es / ?lang=en) first, then localStorage, then default to 'EN'
  const [lang, setLangState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const queryLang = urlParams.get('lang')?.toUpperCase();
        if (queryLang === 'EN' || queryLang === 'FR' || queryLang === 'ES') {
          return queryLang as Language;
        }
      }
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
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', newLang.toLowerCase());
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) {
      // ignore
    }
  };

  // Sync if URL search changes via browser navigation
  useEffect(() => {
    const handleUrlChange = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const queryLang = urlParams.get('lang')?.toUpperCase();
        if (queryLang === 'EN' || queryLang === 'FR' || queryLang === 'ES') {
          setLangState(queryLang as Language);
        }
      } catch (e) {
        // ignore
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

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
