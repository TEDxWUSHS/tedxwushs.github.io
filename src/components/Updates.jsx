import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { siteUpdates } from '../data/updates';

const sectionCopy = {
  ja: {
    eyebrow: 'Newsroom',
    titleLead: 'Latest',
    titleAccent: 'Updates',
    description: 'TEDxWUSHS Youthの開催準備や登壇者に関する最新情報をお知らせします。',
    listLabel: 'TEDxWUSHS Youthの更新情報',
  },
  en: {
    eyebrow: 'Newsroom',
    titleLead: 'Latest',
    titleAccent: 'Updates',
    description: 'The latest announcements about TEDxWUSHS Youth, our speakers, and event preparations.',
    listLabel: 'TEDxWUSHS Youth updates',
  },
};

const formatDate = (date) => date.replaceAll('-', '.');

const Updates = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = sectionCopy[language] ?? sectionCopy.ja;
  const updates = [...siteUpdates].sort((first, second) => (
    second.publishedAt.localeCompare(first.publishedAt)
  ));

  return (
    <section className="updates section-padding" aria-labelledby="updates-heading">
      <div className="container">
        <motion.header
          className="updates-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div>
            <p className="updates-eyebrow" lang="en">{copy.eyebrow}</p>
            <h2 id="updates-heading" className="updates-title" lang="en">
              {copy.titleLead} <span className="highlight-red">{copy.titleAccent}</span>
            </h2>
          </div>
          <p className="updates-description">{copy.description}</p>
        </motion.header>

        <ol className="updates-list" aria-label={copy.listLabel}>
          {updates.map((update, index) => {
            const itemCopy = update.copy[language] ?? update.copy.ja;
            const UpdateLink = update.external ? 'a' : Link;
            const updateLinkProps = update.external
              ? {
                href: update.href,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
              : { to: update.href };
            const UpdateIcon = update.external ? ExternalLink : ArrowRight;
            const externalLabel = language === 'en'
              ? ' (opens in a new tab)'
              : '（新しいタブで開きます）';

            return (
              <motion.li
                key={update.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
              >
                <UpdateLink
                  className="updates-item"
                  aria-label={`${itemCopy.action}: ${itemCopy.title}${update.external ? externalLabel : ''}`}
                  {...updateLinkProps}
                >
                  <div className="updates-item-body">
                    <div className="updates-meta">
                      <time dateTime={update.publishedAt} lang="en">
                        {formatDate(update.publishedAt)}
                      </time>
                      <span lang="en">{update.category}</span>
                    </div>
                    <h3>{itemCopy.title}</h3>
                    <p>{itemCopy.summary}</p>
                    <span className="updates-action">{itemCopy.action}</span>
                  </div>
                  <span className="updates-arrow" aria-hidden="true">
                    <UpdateIcon size={22} />
                  </span>
                </UpdateLink>
              </motion.li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .updates {
          background: var(--ted-black);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .updates-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(18rem, 32rem);
          align-items: end;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .updates-eyebrow {
          margin-bottom: 0.5rem;
          color: var(--ted-red);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.16em;
        }

        .updates-title {
          font-size: clamp(2.35rem, 5vw, 4.5rem);
          line-height: 0.95;
        }

        .updates-description {
          color: #b8b8b8;
          font-size: 1rem;
          line-height: 1.8;
        }

        .updates-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .updates-list li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .updates-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 3rem;
          align-items: center;
          gap: 2rem;
          padding: 2rem 1.25rem;
          color: var(--ted-white);
        }

        .updates-item:hover {
          background: rgba(255, 255, 255, 0.045);
        }

        .updates-item-body {
          min-width: 0;
        }

        .updates-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem 1.25rem;
          margin-bottom: 0.75rem;
          color: #aaa;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .updates-meta span {
          color: var(--ted-red);
        }

        .updates-item h3 {
          margin-bottom: 0.5rem;
          font-size: clamp(1.3rem, 2.2vw, 1.75rem);
          font-weight: 600;
          line-height: 1.25;
          text-transform: none;
        }

        .updates-item p {
          max-width: 52rem;
          color: #b8b8b8;
          font-size: 1rem;
          line-height: 1.7;
        }

        .updates-action {
          display: inline-block;
          margin-top: 0.9rem;
          color: var(--ted-white);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--ted-red);
          text-decoration-thickness: 2px;
          text-underline-offset: 5px;
        }

        .updates-arrow {
          display: grid;
          width: 3rem;
          height: 3rem;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          color: var(--ted-white);
          transition: border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;
        }

        .updates-item:hover .updates-arrow,
        .updates-item:focus-visible .updates-arrow {
          border-color: var(--ted-red);
          background: var(--ted-red);
        }

        @media (max-width: 768px) {
          .updates-header {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 2.5rem;
          }

          .updates-title {
            font-size: clamp(2.25rem, 13vw, 3.5rem);
          }

          .updates-item {
            grid-template-columns: minmax(0, 1fr) 2.75rem;
            gap: 1rem;
            padding: 1.5rem 0.25rem;
          }

          .updates-arrow {
            width: 2.75rem;
            height: 2.75rem;
          }

          .updates-action {
            font-size: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .updates-arrow {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Updates;
