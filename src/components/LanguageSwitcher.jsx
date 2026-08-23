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
  const toggleLanguage = () => setLanguage(language === 'ja' ? 'en' : 'ja');
  const toggleLabel = language === 'ja'
    ? '現在は日本語です。英語に切り替える'
    : 'Currently displayed in English. Switch to Japanese';

  return (
    <>
      <div className="language-switcher language-switcher--desktop" role="group" aria-label={accessibleLabels.group}>
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
      </div>

      <button
        type="button"
        className="language-toggle-mobile"
        aria-label={toggleLabel}
        onClick={toggleLanguage}
      >
        <span className={`language-toggle-code ${language === 'ja' ? 'active' : ''}`} aria-hidden="true">JA</span>
        <span className="language-toggle-divider" aria-hidden="true">/</span>
        <span className={`language-toggle-code ${language === 'en' ? 'active' : ''}`} aria-hidden="true">EN</span>
      </button>

      <style>{`
        .language-switcher {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          height: var(--header-control-size, 46px);
          gap: 0.28rem;
          padding: 0 0.3rem;
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
          min-width: 2.75rem;
          height: calc(var(--header-control-size, 46px) - 2px);
          min-height: calc(var(--header-control-size, 46px) - 2px);
          padding: 0;
          color: inherit;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          opacity: 0.48;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .language-option:hover,
        .language-option.active {
          color: var(--ted-red-text);
          opacity: 1;
        }

        .language-option:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 3px;
          border-radius: 2px;
        }

        .language-divider {
          display: inline-flex;
          align-items: center;
          align-self: stretch;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.7rem;
          user-select: none;
        }

        .language-toggle-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .language-switcher--desktop {
            display: none;
          }

          .language-toggle-mobile {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            width: 4.25rem;
            min-width: 4.25rem;
            height: var(--header-control-size, 44px);
            gap: 0.2rem;
            padding: 0 0.45rem;
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.42);
            color: var(--ted-white);
            line-height: 1;
          }

          .language-toggle-code {
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.04em;
            opacity: 0.5;
            transition: color 0.2s ease, opacity 0.2s ease;
          }

          .language-toggle-code.active {
            color: var(--ted-red-text);
            opacity: 1;
          }

          .language-toggle-divider {
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.62rem;
          }

          .language-toggle-mobile:focus-visible {
            outline: 2px solid var(--ted-white);
            outline-offset: 3px;
          }
        }

        @media (max-width: 360px) {
          .language-toggle-mobile {
            width: 4rem;
            min-width: 4rem;
            gap: 0.15rem;
            padding-right: 0.35rem;
            padding-left: 0.35rem;
          }
        }
      `}</style>
    </>
  );
};

export default LanguageSwitcher;
