import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfV71yd4IkLJzRMCqJdruVBg7RYoGv-LbAYZmMvlNxFC7VjPA/viewform';
const FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfV71yd4IkLJzRMCqJdruVBg7RYoGv-LbAYZmMvlNxFC7VjPA/formResponse?embedded=true';
const FORM_TARGET = 'tedxwushs-google-form-response';

const copy = {
  ja: {
    eyebrow: 'Team Application',
    title: '運営スタッフ募集②',
    lead: '初開催となるTEDxWUSHS Youthを一緒につくる、早稲田大学高等学院の生徒を募集しています。',
    facts: [
      ['応募資格', '早稲田大学高等学院に現在所属している方'],
      ['活動予定', '最低週1回のミーティング（部署により異なります）'],
      ['応募期限', '未定'],
    ],
    formEyebrow: 'Application Form',
    formTitle: '応募フォーム',
    formIntro: '必要事項を入力し、内容をご確認のうえ送信してください。',
    requiredNote: '「必須」の項目は入力が必要です。',
    teamLegend: '希望するチーム',
    optional: '任意',
    teamHint: '現時点で最も希望するチームを1つ選択してください。',
    teams: [
      ['マーケティングチーム', 'マーケティングチーム', 'SNSを中心とした広報'],
      ['テクノロジーチーム', 'テクノロジーチーム', '当日の撮影・動画編集'],
      ['オペレーションチーム', 'オペレーションチーム', '当日の会場運営'],
    ],
    nameLabel: '年組番号・お名前',
    nameExample: '例：3D45 早稲田太郎',
    emailLabel: '連絡用メールアドレス',
    emailHint: '早稲田メールを推奨します。',
    emailExample: 'example@akane.waseda.jp',
    bioLabel: '自己紹介（50字程度）',
    bioExample: '参加を希望する理由や、興味のある活動をお書きください。',
    required: '必須',
    submit: '回答を送信する',
    submitting: '送信中…',
    submitNote: '送信内容はGoogleフォームを通じてTEDxWUSHS Youth運営チームへ送られます。',
    timeout: '送信の確認に時間がかかっています。もう一度送信するか、公式Googleフォームをご利用ください。',
    openForm: '公式Googleフォームを開く',
    responseFrame: 'Googleフォーム送信用フレーム',
  },
  en: {
    eyebrow: 'Team Application',
    title: 'Join the TEDxWUSHS Youth Team',
    lead: 'We are recruiting current Waseda University Senior High School students to help create the first TEDxWUSHS Youth event.',
    facts: [
      ['Eligibility', 'Current students of Waseda University Senior High School'],
      ['Activity', 'At least one meeting per week (varies by team)'],
      ['Deadline', 'To be announced'],
    ],
    formEyebrow: 'Application Form',
    formTitle: 'Apply to the Team',
    formIntro: 'Complete the fields below, review your information, and submit your application.',
    requiredNote: 'Fields marked “Required” must be completed.',
    teamLegend: 'Preferred team',
    optional: 'Optional',
    teamHint: 'Select the team you are currently most interested in.',
    teams: [
      ['マーケティングチーム', 'Marketing Team', 'Social media and event promotion'],
      ['テクノロジーチーム', 'Technology Team', 'Event filming and video editing'],
      ['オペレーションチーム', 'Operations Team', 'On-site event operations'],
    ],
    nameLabel: 'Class, number, and name',
    nameExample: 'e.g. 3D45 Taro Waseda',
    emailLabel: 'Contact email address',
    emailHint: 'Your Waseda email address is recommended.',
    emailExample: 'example@akane.waseda.jp',
    bioLabel: 'Brief self-introduction (about 50 characters)',
    bioExample: 'Tell us why you would like to join and what interests you.',
    required: 'Required',
    submit: 'Submit Application',
    submitting: 'Submitting…',
    submitNote: 'Your response will be sent to the TEDxWUSHS Youth team through Google Forms.',
    timeout: 'Confirmation is taking longer than expected. Please try again or use the official Google Form.',
    openForm: 'Open the official Google Form',
    responseFrame: 'Google Form submission frame',
  },
};

const FormPage = () => {
  const { language } = useLanguage();
  const content = copy[language] ?? copy.ja;
  const navigate = useNavigate();
  const submittedRef = useRef(false);
  const timeoutRef = useRef(null);
  const [submissionState, setSubmissionState] = useState('idle');

  useEffect(() => () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  }, []);

  const handleSubmit = () => {
    submittedRef.current = true;
    setSubmissionState('submitting');

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      submittedRef.current = false;
      setSubmissionState('timeout');
    }, 20000);
  };

  const handleResponseLoad = () => {
    if (!submittedRef.current) return;

    submittedRef.current = false;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    navigate('/form/complete', { replace: true });
  };

  return (
    <main id="main-content" className="application-page" tabIndex={-1}>
      <section className="application-hero" aria-labelledby="application-title">
        <div className="container application-container">
          <p className="application-eyebrow" lang="en">{content.eyebrow}</p>
          <h1 id="application-title">{content.title}</h1>
          <p className="application-lead">{content.lead}</p>

          <dl className="application-facts">
            {content.facts.map(([term, description]) => (
              <div className="application-fact" key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="application-form-section" aria-labelledby="application-form-title">
        <div className="container application-form-container">
          <form
            className="application-form-card"
            action={FORM_RESPONSE_URL}
            method="POST"
            target={FORM_TARGET}
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="fvv" value="1" />
            <input type="hidden" name="pageHistory" value="0" />
            <input type="hidden" name="entry.903034395_sentinel" value="" />

            <header className="application-form-header">
              <p className="application-form-eyebrow" lang="en">{content.formEyebrow}</p>
              <h2 id="application-form-title">{content.formTitle}</h2>
              <p>{content.formIntro}</p>
              <p className="application-required-note"><span aria-hidden="true">*</span> {content.requiredNote}</p>
            </header>

            <fieldset className="application-fieldset">
              <legend>
                {content.teamLegend}
                <span className="field-status field-status-optional">{content.optional}</span>
              </legend>
              <p className="field-hint">{content.teamHint}</p>
              <div className="team-options">
                {content.teams.map(([value, label, detail]) => (
                  <label className="team-option" key={value}>
                    <input type="radio" name="entry.903034395" value={value} />
                    <span className="team-option-copy">
                      <strong>{label}</strong>
                      <small>{detail}</small>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="application-field">
              <label htmlFor="application-name">
                {content.nameLabel}
                <span className="field-status field-status-required">{content.required}</span>
              </label>
              <input
                id="application-name"
                name="entry.344052219"
                type="text"
                autoComplete="name"
                placeholder={content.nameExample}
                required
              />
            </div>

            <div className="application-field">
              <label htmlFor="application-email">
                {content.emailLabel}
                <span className="field-status field-status-required">{content.required}</span>
              </label>
              <p id="application-email-hint" className="field-hint">{content.emailHint}</p>
              <input
                id="application-email"
                name="entry.47317168"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={content.emailExample}
                aria-describedby="application-email-hint"
                required
              />
            </div>

            <div className="application-field">
              <label htmlFor="application-bio">
                {content.bioLabel}
                <span className="field-status field-status-required">{content.required}</span>
              </label>
              <textarea
                id="application-bio"
                name="entry.58034286"
                rows="6"
                placeholder={content.bioExample}
                required
              />
            </div>

            {submissionState === 'timeout' && (
              <p className="application-submit-status" role="alert">{content.timeout}</p>
            )}

            <button
              className="application-submit"
              type="submit"
              disabled={submissionState === 'submitting'}
            >
              <span aria-live="polite">{submissionState === 'submitting' ? content.submitting : content.submit}</span>
              <Send size={20} aria-hidden="true" />
            </button>

            <p className="application-submit-note">{content.submitNote}</p>
            <a className="application-external-link" href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <span>{content.openForm}</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </form>
        </div>
      </section>

      <iframe
        className="visually-hidden"
        name={FORM_TARGET}
        title={content.responseFrame}
        tabIndex="-1"
        aria-hidden="true"
        onLoad={handleResponseLoad}
      />

      <style>{`
        .application-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 10%, rgb(var(--ted-red-rgb) / 0.16), transparent 34rem),
            var(--ted-black);
          color: var(--ted-white);
        }

        .application-container,
        .application-form-container {
          max-width: 920px;
        }

        .application-hero {
          padding: 9.5rem 0 4rem;
          text-align: center;
        }

        .application-eyebrow,
        .application-form-eyebrow {
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .application-hero h1 {
          max-width: 850px;
          margin: 0.75rem auto 1.25rem;
          font-size: clamp(2.7rem, 8vw, 5.2rem);
          line-height: 1;
          text-wrap: balance;
        }

        .application-lead {
          max-width: 700px;
          margin: 0 auto;
          color: #b5b5b5;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          line-height: 1.85;
        }

        .application-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          margin-top: 3.5rem;
          overflow: hidden;
          border: 1px solid #2b2b2b;
          border-radius: 14px;
          background: #2b2b2b;
          text-align: left;
        }

        .application-fact {
          min-width: 0;
          padding: 1.25rem 1.35rem;
          background: #111;
        }

        .application-fact dt {
          margin-bottom: 0.45rem;
          color: var(--ted-red);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .application-fact dd {
          color: #ededed;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .application-form-section {
          padding: 0 0 7rem;
        }

        .application-form-card {
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.5rem);
          border: 1px solid #292929;
          border-top: 7px solid var(--ted-red);
          border-radius: 16px;
          background: #111;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.55);
          color: var(--ted-white);
        }

        .application-form-header {
          margin-bottom: 2.75rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #333;
        }

        .application-form-header h2 {
          margin: 0.4rem 0 0.65rem;
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.1;
          text-align: left;
        }

        .application-form-header > p:not(.application-form-eyebrow):not(.application-required-note) {
          color: #b5b5b5;
        }

        .application-required-note {
          margin-top: 1rem;
          color: #aaa;
          font-size: 0.8rem;
        }

        .application-required-note span {
          color: var(--ted-red);
          font-weight: 800;
        }

        .application-fieldset,
        .application-field {
          min-width: 0;
          margin: 0 0 2.25rem;
          padding: 0;
          border: 0;
        }

        .application-fieldset legend,
        .application-field > label {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 0.45rem;
          color: var(--ted-white);
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.5;
        }

        .field-status {
          display: inline-flex;
          align-items: center;
          min-height: 22px;
          padding: 0.12rem 0.45rem;
          border-radius: 3px;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          line-height: 1;
          text-transform: uppercase;
        }

        .field-status-required {
          background: var(--ted-red);
          color: var(--ted-white);
        }

        .field-status-optional {
          background: #333;
          color: #ddd;
        }

        .field-hint {
          margin-bottom: 0.8rem;
          color: #aaa;
          font-size: 0.84rem;
          line-height: 1.6;
        }

        .team-options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .team-option {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          min-width: 0;
          min-height: 92px;
          padding: 1rem;
          border: 2px solid #3b3b3b;
          border-radius: 9px;
          background: #181818;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .team-option:hover {
          border-color: #777;
          background: #202020;
        }

        .team-option:has(input:checked) {
          border-color: var(--ted-red);
          background: rgb(var(--ted-red-rgb) / 0.12);
        }

        .team-option input {
          flex: 0 0 auto;
          width: 19px;
          height: 19px;
          margin-top: 0.1rem;
          accent-color: var(--ted-red);
        }

        .team-option-copy {
          display: block;
          min-width: 0;
        }

        .team-option-copy strong,
        .team-option-copy small {
          display: block;
        }

        .team-option-copy strong {
          color: var(--ted-white);
          font-size: 0.9rem;
          line-height: 1.45;
        }

        .team-option-copy small {
          margin-top: 0.3rem;
          color: #aaa;
          font-size: 0.75rem;
          line-height: 1.5;
        }

        .application-field input,
        .application-field textarea {
          display: block;
          width: 100%;
          min-width: 0;
          border: 2px solid #444;
          border-radius: 8px;
          background: #080808;
          color: var(--ted-white);
          font: inherit;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .application-field input {
          min-height: 52px;
          padding: 0.8rem 0.95rem;
        }

        .application-field textarea {
          min-height: 160px;
          padding: 0.9rem 0.95rem;
          resize: vertical;
        }

        .application-field input::placeholder,
        .application-field textarea::placeholder {
          color: #888;
          opacity: 1;
        }

        .application-field input:focus,
        .application-field textarea:focus {
          border-color: var(--ted-red);
          outline: none;
          box-shadow: 0 0 0 3px rgb(var(--ted-red-rgb) / 0.16);
        }

        .application-page :where(input, textarea, button, a):focus-visible {
          outline-color: var(--ted-red);
        }

        .application-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          width: 100%;
          min-height: 56px;
          padding: 0.9rem 1.25rem;
          border-radius: 8px;
          background: var(--ted-red);
          color: var(--ted-white);
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .application-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgb(var(--ted-red-rgb) / 0.3);
        }

        .application-submit:disabled {
          cursor: wait;
          opacity: 0.65;
        }

        .application-submit-status {
          margin: -0.5rem 0 1rem;
          padding: 0.85rem 1rem;
          border-left: 4px solid var(--ted-red);
          background: #1b1b1b;
          color: #ddd;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .application-submit-note {
          margin: 1rem auto 0;
          color: #aaa;
          font-size: 0.78rem;
          line-height: 1.6;
          text-align: center;
        }

        .application-external-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: fit-content;
          min-height: 44px;
          margin: 0.35rem auto 0;
          color: #ddd;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .application-external-link:hover {
          color: var(--ted-red);
        }

        @media (max-width: 760px) {
          .application-hero {
            padding: 7.5rem 0 3rem;
          }

          .application-facts,
          .team-options {
            grid-template-columns: 1fr;
          }

          .application-facts {
            margin-top: 2.5rem;
          }

          .application-form-section {
            padding-bottom: 5rem;
          }

          .application-form-container {
            padding-right: max(1rem, env(safe-area-inset-right));
            padding-left: max(1rem, env(safe-area-inset-left));
          }

          .application-form-card {
            border-radius: 12px;
          }

          .team-option {
            min-height: 72px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .team-option,
          .application-field input,
          .application-field textarea,
          .application-submit {
            transition: none;
          }

          .application-submit:hover:not(:disabled) {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
};

export default FormPage;
