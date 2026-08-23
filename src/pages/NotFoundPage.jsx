import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const notFoundCopy = {
  ja: {
    title: 'ページが見つかりません',
    description: '指定されたページは移動または削除された可能性があります。',
    action: 'ホームへ戻る',
  },
  en: {
    title: 'Page Not Found',
    description: 'The page may have been moved or removed.',
    action: 'Return Home',
  },
};

const NotFoundPage = () => {
  const { language } = useLanguage();
  const copy = notFoundCopy[language] ?? notFoundCopy.ja;

  return (
    <main id="main-content" tabIndex={-1} className="not-found-page">
      <div className="container not-found-page__content">
        <p className="not-found-page__code" aria-hidden="true">404</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
        <Link to="/" className="not-found-page__link">{copy.action}</Link>
      </div>

      <style>{`
        .not-found-page {
          display: grid;
          min-height: 75vh;
          padding-top: 100px;
          place-items: center;
          background: var(--ted-black);
        }

        .not-found-page__content {
          padding-top: 5rem;
          padding-bottom: 5rem;
          text-align: center;
        }

        .not-found-page__code {
          color: var(--ted-red-text);
          font-family: var(--font-heading);
          font-size: clamp(4rem, 20vw, 9rem);
          font-weight: 800;
          line-height: 0.9;
        }

        .not-found-page h1 {
          margin-top: 1.5rem;
          font-size: clamp(2rem, 8vw, 3.5rem);
          text-wrap: balance;
        }

        .not-found-page__content > p:not(.not-found-page__code) {
          max-width: 38rem;
          margin: 1.5rem auto 2rem;
          color: #aaa;
        }

        .not-found-page__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0.75rem 1.25rem;
          border: 2px solid var(--ted-white);
          border-radius: 4px;
          font-weight: 800;
        }

        .not-found-page__link:hover {
          background: var(--ted-white);
          color: var(--ted-black);
        }
      `}</style>
    </main>
  );
};

export default NotFoundPage;
