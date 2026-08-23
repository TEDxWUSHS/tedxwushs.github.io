import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { organizers, organizerSourceUrl } from '../data/organizers';

const pageCopy = {
  ja: {
    eyebrow: 'Organizing Team',
    titleLead: '運営する',
    titleAccent: 'メンバー',
    introduction: 'TEDxWUSHS Youthを企画・運営するメンバーです。氏名と役職は、TED公式イベントページの掲載情報に基づいています。',
    memberList: '運営メンバー一覧',
    officialRole: 'TED公式掲載役職',
    source: 'TED公式イベントページで確認する',
    sourceNote: '掲載情報の出典',
  },
  en: {
    eyebrow: 'Organizing Team',
    titleLead: 'Our',
    titleAccent: 'Organizers',
    introduction: 'Meet the people who organize and operate TEDxWUSHS Youth. Names and roles are based on the official TED event page.',
    memberList: 'Organizing team members',
    officialRole: 'Role listed by TED',
    source: 'View the official event page on TED.com',
    sourceNote: 'Information source',
  },
};

const OrganizersPage = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = pageCopy[language] ?? pageCopy.ja;

  return (
    <main id="main-content" className="organizers-page" tabIndex={-1}>
      <section className="organizers-hero" aria-labelledby="organizers-title">
        <div className="container organizers-container">
          <motion.div
            className="organizers-heading"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55 }}
          >
            <p className="organizers-eyebrow" lang="en">{copy.eyebrow}</p>
            <h1 id="organizers-title">
              {copy.titleLead} <span className="highlight-red">{copy.titleAccent}</span>
            </h1>
            <p className="organizers-introduction">{copy.introduction}</p>
          </motion.div>

          <h2 className="visually-hidden">{copy.memberList}</h2>
          <ul className="organizers-grid">
            {organizers.map((organizer, index) => (
              <motion.li
                className="organizer-card"
                key={organizer.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: index * 0.06 }}
              >
                <div className="organizer-role-block">
                  <span className="organizer-role-label">{copy.officialRole}</span>
                  <span className="organizer-role" lang="en">{organizer.role.en}</span>
                  {language === 'ja' && (
                    <span className="organizer-role-ja">{organizer.role.ja}</span>
                  )}
                </div>
                <h3 className="organizer-name" lang="en">{organizer.name}</h3>
              </motion.li>
            ))}
          </ul>

          <motion.aside
            className="organizers-source"
            aria-label={copy.sourceNote}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>{copy.sourceNote}</span>
            <a href={organizerSourceUrl} target="_blank" rel="noopener noreferrer">
              <span>{copy.source}</span>
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </motion.aside>
        </div>
      </section>

      <style>{`
        .organizers-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 88% 8%, rgb(var(--ted-red-rgb) / 0.11), transparent 28rem),
            var(--ted-black);
        }

        .organizers-hero {
          padding: 9.5rem 0 7rem;
        }

        .organizers-container {
          width: 100%;
        }

        .organizers-heading {
          max-width: 800px;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .organizers-eyebrow {
          margin-bottom: 0.85rem;
          color: var(--ted-red);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .organizers-heading h1 {
          margin-bottom: 1.4rem;
          font-size: clamp(2.5rem, 7vw, 5rem);
          line-height: 1.05;
          text-wrap: balance;
        }

        .organizers-introduction {
          max-width: 720px;
          margin: 0 auto;
          color: #ccc;
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.85;
          text-wrap: pretty;
        }

        .organizers-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 1.25rem;
          width: 100%;
          margin: 0;
        }

        .organizer-card {
          display: flex;
          min-width: 0;
          min-height: 250px;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 3px solid var(--ted-red);
          border-radius: 12px;
          background: var(--ted-dark-gray);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
          transition: border-color 0.25s ease, transform 0.25s ease;
          overflow-wrap: anywhere;
          grid-column: span 2;
        }

        .organizer-card:nth-last-child(2) {
          grid-column: 2 / span 2;
        }

        .organizer-card:last-child {
          grid-column: 4 / span 2;
        }

        .organizer-card:hover {
          border-color: rgb(var(--ted-red-rgb) / 0.75);
          transform: translateY(-4px);
        }

        .organizer-role-block {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.35rem;
        }

        .organizer-role-label {
          color: #aaa;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .organizer-role {
          display: inline-flex;
          max-width: 100%;
          padding: 0.35rem 0.6rem;
          border-radius: 999px;
          background: var(--ted-black);
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .organizer-role-ja {
          color: #ccc;
          font-size: 0.85rem;
        }

        .organizer-name {
          margin-top: 3rem;
          font-size: clamp(1.45rem, 3vw, 2rem);
          line-height: 1.15;
          text-transform: none;
        }

        .organizers-source {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem 2rem;
          margin-top: 3rem;
          padding: 1rem 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          background: var(--ted-dark-gray);
          color: #aaa;
          font-size: 0.9rem;
        }

        .organizers-source a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 44px;
          padding: 0.65rem 0.9rem;
          border-radius: 6px;
          background: var(--ted-red);
          color: var(--ted-white);
          font-weight: 800;
          text-align: center;
        }

        .organizers-source a:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .organizers-hero {
            padding-top: 8rem;
          }

          .organizers-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .organizer-card,
          .organizer-card:nth-last-child(2) {
            grid-column: auto;
          }

          .organizer-card:last-child {
            width: calc(50% - 0.625rem);
            grid-column: 1 / -1;
            justify-self: center;
          }
        }

        @media (max-width: 620px) {
          .organizers-hero {
            padding: 7.5rem 0 5rem;
          }

          .organizers-heading {
            margin-bottom: 3rem;
          }

          .organizers-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .organizer-card {
            min-height: 220px;
            padding: 1.4rem;
          }

          .organizer-card:last-child {
            width: 100%;
            grid-column: auto;
          }

          .organizers-source {
            align-items: stretch;
            flex-direction: column;
            text-align: center;
          }

          .organizers-source a {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .organizer-card,
          .organizers-source a {
            transition: none;
          }

          .organizer-card:hover,
          .organizers-source a:hover {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
};

export default OrganizersPage;
