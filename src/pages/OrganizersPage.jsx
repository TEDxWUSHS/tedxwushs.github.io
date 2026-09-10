import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { organizers } from '../data/organizers';

const formatOrganizerName = (name) => name
  .trim()
  .toLocaleLowerCase('en-US')
  .replace(/(^|[\s'-])[a-z]/g, (segment) => segment.toLocaleUpperCase('en-US'));

const pageCopy = {
  ja: {
    eyebrow: 'Organizing Team',
    year: '2026',
    fullTitle: '2026 運営メンバー',
    titleLead: '運営',
    titleAccent: 'メンバー',
    memberList: '運営メンバー一覧',
  },
  en: {
    eyebrow: 'TEDxWUSHS Youth',
    year: '2026',
    fullTitle: '2026 Organizing Team',
    titleLead: 'Organizing',
    titleAccent: 'Team',
    memberList: 'Organizing team members',
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
            <h1 id="organizers-title" aria-label={copy.fullTitle}>
              <span className="organizers-year" aria-hidden="true">{copy.year}</span>
              <span className="organizers-title-text" aria-hidden="true">
                {copy.titleLead}{language === 'en' ? ' ' : null}
                <span className="highlight-red">{copy.titleAccent}</span>
              </span>
            </h1>
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
                <div className="organizer-identity">
                  <h3 className="organizer-name" lang="en">
                    {formatOrganizerName(organizer.name)}
                  </h3>
                  <span className="organizer-grade">
                    {organizer.grade[language] ?? organizer.grade.ja}
                  </span>
                </div>
                <div className="organizer-role-block">
                  <span className="organizer-role" lang="en">{organizer.role.en}</span>
                  {language === 'ja' && (
                    <span className="organizer-role-ja">{organizer.role.ja}</span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
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
          margin: 0 auto clamp(3.5rem, 7vw, 5rem);
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
          margin: 0;
          font-size: clamp(2.5rem, 7vw, 5rem);
          line-height: 1.05;
          text-wrap: balance;
        }

        .organizers-year {
          display: block;
          margin-bottom: 0.65rem;
          color: var(--ted-white);
          font-family: var(--font-main);
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1;
        }

        .organizers-title-text {
          display: block;
        }

        .organizers-grid {
          display: block;
          width: min(100%, 960px);
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        .organizer-card {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(14rem, 0.85fr);
          align-items: center;
          gap: 1rem 3rem;
          min-width: 0;
          padding: clamp(1.75rem, 3.5vw, 2.5rem) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          overflow-wrap: anywhere;
        }

        .organizer-role-block {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.25rem;
          padding-left: 1rem;
          border-left: 3px solid var(--ted-red);
        }

        .organizer-identity {
          min-width: 0;
        }

        .organizer-grade {
          display: block;
          margin-top: 0.55rem;
          color: #aaa;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.5;
        }

        .organizer-role {
          display: block;
          max-width: 100%;
          color: #f4f4f4;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .organizer-role-ja {
          color: #aaa;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .organizer-name {
          max-width: 100%;
          font-size: clamp(1.55rem, 2.7vw, 2.15rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-transform: none;
          text-wrap: balance;
        }

        @media (max-width: 900px) {
          .organizers-hero {
            padding-top: 8rem;
          }

          .organizer-card {
            gap: 1rem 2rem;
          }
        }

        @media (max-width: 700px) {
          .organizers-hero {
            padding: 7.5rem 0 4.5rem;
          }

          .organizers-heading {
            margin-bottom: 2.75rem;
          }

          .organizer-card {
            grid-template-columns: minmax(0, 1fr);
            gap: 0.85rem;
            padding: 1.5rem 0;
          }

          .organizer-role-block {
            padding-left: 0.75rem;
          }
        }
      `}</style>
    </main>
  );
};

export default OrganizersPage;
