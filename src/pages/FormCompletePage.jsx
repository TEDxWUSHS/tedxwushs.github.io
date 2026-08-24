import { ArrowLeft, CheckCircle2, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  ja: {
    eyebrow: 'Application Received',
    title: '送信が完了しました',
    message: 'ご応募ありがとうございます。回答を受け付けました。今後のご案内に備えて、入力いただいたメールアドレスをご確認ください。',
    home: 'ホームへ戻る',
    another: 'フォームへ戻る',
  },
  en: {
    eyebrow: 'Application Received',
    title: 'Submission Complete',
    message: 'Thank you for applying. Your response has been received. Please check the email address you provided for future updates.',
    home: 'Back to Home',
    another: 'Back to the Form',
  },
};

const FormCompletePage = () => {
  const { language } = useLanguage();
  const content = copy[language] ?? copy.ja;

  return (
    <main id="main-content" className="form-complete-page" tabIndex={-1}>
      <section className="form-complete-section" aria-labelledby="form-complete-title">
        <div className="container form-complete-container">
          <div className="form-complete-card">
            <CheckCircle2 className="form-complete-icon" size={72} strokeWidth={1.7} aria-hidden="true" />
            <p className="form-complete-eyebrow" lang="en">{content.eyebrow}</p>
            <h1 id="form-complete-title">{content.title}</h1>
            <p className="form-complete-message">{content.message}</p>

            <div className="form-complete-actions">
              <Link className="form-complete-primary" to="/">
                <Home size={19} aria-hidden="true" />
                <span>{content.home}</span>
              </Link>
              <Link className="form-complete-secondary" to="/form">
                <ArrowLeft size={19} aria-hidden="true" />
                <span>{content.another}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .form-complete-page {
          display: grid;
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 25%, rgb(var(--ted-red-rgb) / 0.18), transparent 30rem),
            var(--ted-black);
          color: var(--ted-white);
        }

        .form-complete-section {
          display: flex;
          align-items: center;
          padding: 9rem 0 6rem;
        }

        .form-complete-container {
          max-width: 780px;
        }

        .form-complete-card {
          padding: clamp(2rem, 7vw, 4.5rem);
          border: 1px solid #292929;
          border-top: 7px solid var(--ted-red);
          border-radius: 16px;
          background: #111;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.6);
          color: var(--ted-white);
          text-align: center;
        }

        .form-complete-icon {
          margin-bottom: 1.25rem;
          color: var(--ted-red);
        }

        .form-complete-eyebrow {
          color: var(--ted-red);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .form-complete-card h1 {
          margin: 0.65rem 0 1rem;
          font-size: clamp(2.25rem, 7vw, 4rem);
          line-height: 1.05;
          text-wrap: balance;
        }

        .form-complete-message {
          max-width: 570px;
          margin: 0 auto;
          color: #aaa;
          font-size: clamp(0.95rem, 2vw, 1.08rem);
          line-height: 1.85;
        }

        .form-complete-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 2.5rem;
        }

        .form-complete-primary,
        .form-complete-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 50px;
          padding: 0.8rem 1.3rem;
          border: 2px solid var(--ted-red);
          border-radius: 7px;
          font-size: 0.88rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .form-complete-primary {
          background: var(--ted-red);
          color: var(--ted-white);
        }

        .form-complete-secondary {
          background: #111;
          color: var(--ted-white);
        }

        .form-complete-primary:hover {
          color: var(--ted-white);
          box-shadow: 0 8px 22px rgb(var(--ted-red-rgb) / 0.28);
        }

        .form-complete-secondary:hover {
          background: #1d1d1d;
          color: var(--ted-red);
        }

        .form-complete-page :where(a):focus-visible {
          outline-color: var(--ted-red);
        }

        @media (max-width: 560px) {
          .form-complete-section {
            padding: 7rem 0 4rem;
          }

          .form-complete-container {
            padding-right: max(1rem, env(safe-area-inset-right));
            padding-left: max(1rem, env(safe-area-inset-left));
          }

          .form-complete-card {
            border-radius: 12px;
          }

          .form-complete-actions,
          .form-complete-primary,
          .form-complete-secondary {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
};

export default FormCompletePage;
