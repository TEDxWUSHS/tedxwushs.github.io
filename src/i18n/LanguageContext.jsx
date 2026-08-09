import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'tedxwushs-language';
const DEFAULT_LANGUAGE = 'ja';
const SUPPORTED_LANGUAGES = new Set(['ja', 'en']);

const languageMeta = {
  ja: {
    description: 'TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.',
    locale: 'ja_JP',
  },
  en: {
    description: 'TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.',
    locale: 'en_US',
  },
};

const LanguageContext = createContext(undefined);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.has(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const updateMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', content);
  }
};

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    if (SUPPORTED_LANGUAGES.has(nextLanguage)) {
      setLanguageState(nextLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The language still works for the current session when storage is unavailable.
    }

    const meta = languageMeta[language];
    updateMetaContent('meta[name="description"]', meta.description);
    updateMetaContent('meta[property="og:description"]', meta.description);
    updateMetaContent('meta[property="og:locale"]', meta.locale);
    updateMetaContent('meta[property="twitter:description"]', meta.description);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
};
