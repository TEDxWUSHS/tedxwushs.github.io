import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, Ticket, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const joinCopy = {
  ja: {
    sectionSubtitle: 'TEDxWUSHS Youthへの参加方法と最新情報をご案内します。',
    optionsHeading: '参加方法と最新情報',
    applicationsUpdate: '2026年開催分のスピーカー募集及び運営チーム募集は終了しました。たくさんのご応募ありがとうございました。',
    teamDescription: '2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトとSNSでお知らせします。',
    teamAction: '募集状況を見る',
    audienceDescription: '対象は早稲田大学高等学院の生徒及びその保護者です。参加申込みは2026年9月開始予定です。',
    audienceAction: '対象・申込情報を見る',
    subscribed: <>登録完了しました<br />イベントの最新情報をお届けしますのでお楽しみに。</>,
    newsletter: 'イベントの最新情報や募集のお知らせをメールでお届けします。',
    emailLabel: 'メールアドレス',
    emailPlaceholder: 'メールアドレスを入力',
    subscribeAction: '登録する',
    contactTitle: 'お問い合わせ',
    contactDescription: '参加方法や当日の運営についてのご質問は、イベント事務局までご連絡ください。'
  },
  en: {
    sectionSubtitle: 'Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.',
    optionsHeading: 'Ways to Participate and Stay Updated',
    applicationsUpdate: 'Speaker and organizing team applications for the 2026 event are now closed. Thank you to everyone who applied.',
    teamDescription: 'Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on our website and social media.',
    teamAction: 'View Recruitment Status',
    audienceDescription: 'Audience registration is open to students of Waseda University Senior High School and their parents or guardians. Registration is scheduled to begin in September 2026.',
    audienceAction: 'View Eligibility & Registration',
    subscribed: <>You are subscribed.<br />We look forward to sharing the latest event updates with you.</>,
    newsletter: 'Receive event updates and future application announcements by email.',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email address',
    subscribeAction: 'Subscribe',
    contactTitle: 'Contact Us',
    contactDescription: 'For questions about attending the event or event-day operations, please contact the TEDxWUSHS Youth team.'
  }
};

// eslint-disable-next-line react/prop-types
const JoinUs = ({ hideHeader = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successMessageRef = useRef(null);
  const submissionTimerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const copy = joinCopy[language];

  useEffect(() => {
    if (isSubmitted) {
      successMessageRef.current?.focus();
    }
  }, [isSubmitted]);

  useEffect(() => () => {
    if (submissionTimerRef.current) {
      clearTimeout(submissionTimerRef.current);
    }
  }, []);

  const handleNewsletterSubmit = () => {
    if (submissionTimerRef.current) {
      clearTimeout(submissionTimerRef.current);
    }

    submissionTimerRef.current = setTimeout(() => setIsSubmitted(true), 300);
  };

  const opportunities = [
    {
      title: 'Join the Team',
      icon: <Users size={32} aria-hidden="true" focusable="false" />,
      description: copy.teamDescription,
      link: '/join-us/team',
      action: copy.teamAction,
      status: 'Recruitment Closed',
      closed: true,
      color: '#fff'
    },
    {
      title: 'Register as Audience',
      icon: <Ticket size={32} aria-hidden="true" focusable="false" />,
      description: copy.audienceDescription,
      link: '/join-us/audience',
      action: copy.audienceAction,
      color: '#fff'
    }
  ];

  return (
    <section id="contact" className="join-us section-padding">
      <div className="container">
        {hideHeader ? (
          <h2 className="visually-hidden">{copy.optionsHeading}</h2>
        ) : (
          <motion.div
            className="section-header"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="join-tagline" lang="en">Be part of the community</span>
            <h2 className="section-title" lang="en">Join <span className="highlight-red">Us</span></h2>
            <p className="section-subtitle">
              {copy.sectionSubtitle}
            </p>
          </motion.div>
        )}

        <motion.div
          className="recruitment-closed"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <strong lang="en">2026 Applications Update</strong>
          <p>{copy.applicationsUpdate}</p>
        </motion.div>

        <div className="opportunities-grid">
          {opportunities.map((opt, index) => (
            <motion.div
              key={opt.title}
              className={`opt-card${opt.closed ? ' opt-card--closed' : ''}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
            >
              <div className="opt-icon">
                {opt.icon}
              </div>
              {opt.status && <span className="opt-status" lang="en">{opt.status}</span>}
              <h3 className="opt-title" lang="en">{opt.title}</h3>
              <p className="opt-description">{opt.description}</p>
              <Link to={opt.link} className="opt-link">
                {opt.action} <ArrowRight size={16} aria-hidden="true" focusable="false" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="newsletter-box"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3 lang="en">Stay Updated</h3>

            <iframe
              title="hidden_iframe"
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: 'none' }}
            ></iframe>

            {isSubmitted ? (
              <div
                ref={successMessageRef}
                className="success-message"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                tabIndex={-1}
              >
                <p>{copy.subscribed}</p>
              </div>
            ) : (
              <div>
                <p id="newsletter-description">{copy.newsletter}</p>
                <form
                  className="newsletter-form"
                  action="https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse"
                  method="post"
                  target="hidden_iframe"
                  onSubmit={handleNewsletterSubmit}
                >
                  <div className="newsletter-field">
                    <label htmlFor="newsletter-email">{copy.emailLabel}</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="entry.269866944"
                      aria-describedby="newsletter-description"
                      placeholder={copy.emailPlaceholder}
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary">{copy.subscribeAction}</button>
                </form>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="contact-box"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail size={30} aria-hidden="true" focusable="false" />
          <div>
            <span lang="en">Questions about the event?</span>
            <h3>{copy.contactTitle}</h3>
            <p>{copy.contactDescription}</p>
            <a href="mailto:tedxwushs@gmail.com">tedxwushs@gmail.com</a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .join-us {
          background-color: var(--ted-black);
          position: relative;
        }

        .join-tagline {
          color: var(--ted-red);
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.75rem;
          margin-bottom: 1rem;
          display: block;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          color: #aaa;
          max-width: 600px;
          margin: 1.5rem auto 0;
          font-size: 1.1rem;
        }

        .recruitment-closed {
          max-width: 820px;
          margin: -2rem auto 4rem;
          padding: 1.5rem 2rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.45);
          border-radius: 12px;
          background: var(--ted-black);
          text-align: center;
        }

        .recruitment-closed strong {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--ted-red);
          font-family: var(--font-heading);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .recruitment-closed p {
          color: #bbb;
        }

        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        .opt-card {
          background: var(--ted-dark-gray);
          padding: 3rem 2rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          will-change: transform, opacity;
        }

        .opt-card:hover {
          transform: translateY(-10px) !important;
          border-color: var(--ted-red);
          background: linear-gradient(145deg, var(--ted-dark-gray), #000);
        }

        .opt-card--closed {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .opt-status {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 0.35rem 0.7rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.55);
          border-radius: 999px;
          background: var(--ted-black);
          color: var(--ted-red);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .opt-icon {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          color: var(--ted-white);
          transition: color 0.3s ease;
        }

        .opt-card:hover .opt-icon {
          color: var(--ted-red);
        }

        .opt-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .opt-description {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .opt-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 44px;
          padding: 0.45rem 0.75rem;
          border-radius: 999px;
          background: var(--ted-black);
          color: var(--ted-red);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .newsletter-box {
          background: linear-gradient(135deg, #111, #000);
          border: 1px solid var(--ted-red);
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
        }

        .newsletter-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          color: #888;
          margin-bottom: 2.5rem;
        }

        .newsletter-form {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-field {
          flex: 1;
          min-width: 0;
          text-align: left;
        }

        .newsletter-field label {
          display: block;
          margin-bottom: 0.5rem;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .newsletter-form input {
          width: 100%;
          background: #222;
          border: 1px solid #444;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
        }

        .newsletter-form input:focus {
          border-color: var(--ted-red);
        }

        .newsletter-form input:focus-visible,
        .btn-primary:focus-visible,
        .opt-link:focus-visible,
        .contact-box a:focus-visible,
        .success-message:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        .btn-primary {
          background: var(--ted-red);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          text-transform: uppercase;
          transition: var(--transition-smooth);
        }

        .btn-primary:hover {
          background: var(--ted-red);
          transform: scale(1.05);
        }

        .success-message {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ted-red);
          border-radius: 8px;
          padding: 2rem;
          margin-top: 1.5rem;
          color: white;
          font-weight: 500;
          line-height: 1.6;
        }

        .contact-box {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.5rem;
          align-items: start;
          margin-top: 3rem;
          padding: 2rem;
          border-radius: 16px;
          background: var(--ted-black);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-box > svg {
          color: var(--ted-red);
        }

        .contact-box span {
          color: #bbb;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-box h3 {
          margin: 0.25rem 0 0.6rem;
          font-size: 1.5rem;
        }

        .contact-box p {
          margin-bottom: 0.7rem;
          color: #aaa;
        }

        .contact-box a {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--ted-red);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .opportunities-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .newsletter-box {
            padding: 2.5rem;
          }
          .newsletter-form {
            flex-direction: column;
            align-items: stretch;
          }
          .contact-box {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-box > svg {
            margin: 0 auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .opt-card,
          .opt-icon,
          .btn-primary {
            transition: none;
          }

          .opt-card:hover,
          .btn-primary:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinUs;
