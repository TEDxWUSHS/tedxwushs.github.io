import { useLanguage } from '../i18n/LanguageContext';

const labels = {
  ja: {
    group: '表示言語',
    ja: '日本語で表示',
    en: '英語で表示',
  },
  en: {
    group: 'Display language',
    ja: 'Show in Japanese',
    en: 'Show in English',
  },
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const accessibleLabels = labels[language];

  return (
    <div className="language-switcher" role="group" aria-label={accessibleLabels.group}>
      <button
        type="button"
        className={`language-option ${language === 'ja' ? 'active' : ''}`}
        aria-label={accessibleLabels.ja}
        aria-pressed={language === 'ja'}
        onClick={() => setLanguage('ja')}
      >
        JA
      </button>
      <span className="language-divider" aria-hidden="true">/</span>
      <button
        type="button"
        className={`language-option ${language === 'en' ? 'active' : ''}`}
        aria-label={accessibleLabels.en}
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>

      <style>{`
        .language-switcher {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          gap: 0.28rem;
          padding: 0.12rem 0.3rem;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.42);
          color: var(--ted-white);
          line-height: 1;
        }

        .language-option {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.5rem;
          min-height: 2.5rem;
          padding: 0.18rem;
          color: inherit;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          opacity: 0.48;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .language-option:hover,
        .language-option.active {
          color: var(--ted-red);
          opacity: 1;
        }

        .language-option:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 3px;
          border-radius: 2px;
        }

        .language-divider {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.7rem;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
