import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { speakers } from '../data/speakers';
import SpeakerCard from './SpeakerCard';

const sectionCopy = {
  ja: {
    previewSubtitle: '多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。',
    fullSubtitle: 'TEDxWUSHS Youth 2026に登壇するスピーカーと、その背景にある経験やアイデアをご紹介します。',
    empty: 'スピーカー情報は近日公開予定です。',
    comingSoonLabel: '追加情報',
    comingSoonBody: 'スピーカーや講演内容に関する追加情報を、今後このページでお知らせします。',
  },
  en: {
    previewSubtitle: 'Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.',
    fullSubtitle: 'Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.',
    empty: 'Speaker information will be announced soon.',
    comingSoonLabel: 'More to come',
    comingSoonBody: 'More speaker and talk information will be announced on this page.',
  },
};

// eslint-disable-next-line react/prop-types
const Speakers = ({ variant = 'preview' }) => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = sectionCopy[language] ?? sectionCopy.ja;
  const isFullPage = variant === 'full';
  const Heading = isFullPage ? 'h1' : 'h2';
  const publishedSpeakers = [...speakers]
    .filter((speaker) => speaker.published && (isFullPage || speaker.featured))
    .sort((first, second) => first.displayOrder - second.displayOrder);

  return (
    <section
      id="speakers"
      className={`speakers-section speakers-section--${variant} section-padding`}
      aria-labelledby="speakers-heading"
    >
      <div className="container speakers-section__container">
        <motion.header
          className="speakers-section__header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <span className="speakers-section__eyebrow">
            {isFullPage ? 'The 2026 Speaker Lineup' : 'Ideas in Motion'}
          </span>
          <Heading id="speakers-heading" className="speakers-section__title">
            {isFullPage ? 'Our ' : 'Featured '}
            <span>Speakers</span>
          </Heading>
          <p className="speakers-section__subtitle">
            {isFullPage ? copy.fullSubtitle : copy.previewSubtitle}
          </p>
        </motion.header>

        {publishedSpeakers.length > 0 ? (
          <div className={isFullPage ? 'speakers-section__list' : 'speakers-section__grid'}>
            {publishedSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                language={language}
                variant={isFullPage ? 'detail' : 'preview'}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="speakers-section__empty">{copy.empty}</p>
        )}

        {isFullPage && publishedSpeakers.length > 0 && (
          <section className="speakers-section__coming-soon" aria-labelledby="speakers-coming-soon-heading">
            <span className="speakers-section__coming-soon-mark" aria-hidden="true">+</span>
            <div>
              <p className="speakers-section__coming-soon-label">{copy.comingSoonLabel}</p>
              <h2 id="speakers-coming-soon-heading" className="speakers-section__coming-soon-title">
                Coming Soon
              </h2>
              <p className="speakers-section__coming-soon-body">{copy.comingSoonBody}</p>
            </div>
          </section>
        )}

        {!isFullPage && publishedSpeakers.length > 0 && (
          <div className="speakers-section__cta-wrap">
            <Link to="/speakers" className="speakers-section__cta">
              More Details
              {/* View All Speakers */}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .speakers-section {
          --speaker-accent: #ff5a6d;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 12%, rgba(235, 0, 40, 0.11), transparent 30rem),
            var(--ted-black);
        }

        .speakers-section--full {
          padding-top: 10rem;
          min-height: 100vh;
        }

        .speakers-section__container {
          position: relative;
          z-index: 1;
        }

        .speakers-section__header {
          max-width: 760px;
          margin: 0 auto 4.5rem;
          text-align: center;
        }

        .speakers-section__eyebrow {
          display: inline-block;
          margin-bottom: 1rem;
          color: var(--speaker-accent);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .speakers-section__title {
          font-size: clamp(2.6rem, 7vw, 5rem);
          line-height: 0.95;
          text-transform: uppercase;
        }

        .speakers-section__title span {
          color: var(--ted-red);
        }

        .speakers-section__subtitle {
          max-width: 650px;
          margin: 1.5rem auto 0;
          color: #999;
          font-size: clamp(1rem, 2vw, 1.12rem);
          line-height: 1.8;
        }

        .speakers-section__grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .speaker-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: linear-gradient(145deg, #171717, #0c0c0c);
        }

        .speaker-card--preview {
          flex: 1 1 290px;
          max-width: 360px;
          border-radius: 16px;
          transition: border-color 0.35s ease, transform 0.35s ease;
        }

        .speaker-card--preview:hover {
          border-color: rgba(235, 0, 40, 0.72);
          transform: translateY(-7px);
        }

        .speaker-card__image-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #111;
        }

        .speaker-card__image-frame::after {
          content: '';
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.58));
          pointer-events: none;
        }

        .speaker-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: var(--speaker-image-position, 50% 50%);
          transition: transform 0.55s ease;
        }

        .speaker-card--preview:hover .speaker-card__image {
          transform: scale(1.035);
        }

        .speaker-card__content {
          padding: 1.6rem;
        }

        .speaker-card__role {
          margin-bottom: 0.55rem;
          color: var(--speaker-accent);
          font-size: 0.73rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          line-height: 1.5;
        }

        .speaker-card__name {
          margin-bottom: 1rem;
          font-size: clamp(1.55rem, 3vw, 2rem);
          line-height: 1.1;
          letter-spacing: 0;
          text-transform: none;
        }

        .speaker-card__summary {
          color: #aaa;
          font-size: 0.96rem;
          line-height: 1.75;
        }

        .speakers-section__cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 3.5rem;
        }

        .speakers-section__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.95rem 1.4rem;
          border: 1px solid rgba(235, 0, 40, 0.65);
          border-radius: 999px;
          color: var(--ted-white);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .speakers-section__cta:hover,
        .speakers-section__cta:focus-visible {
          border-color: var(--ted-red);
          background: var(--ted-red);
          transform: translateY(-2px);
        }

        .speakers-section__cta:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 4px;
        }

        .speakers-section__list {
          display: flex;
          flex-direction: column;
          gap: 4.5rem;
          max-width: 1080px;
          margin: 0 auto;
        }

        .speaker-card--detail {
          display: grid;
          grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
          align-items: stretch;
          border-radius: 20px;
        }

        .speaker-card--detail .speaker-card__image-frame {
          min-height: 100%;
          aspect-ratio: auto;
        }

        .speaker-card--detail.speaker-card--reversed {
          grid-template-columns: minmax(0, 1.18fr) minmax(260px, 0.82fr);
        }

        .speaker-card--detail.speaker-card--reversed .speaker-card__image-frame {
          order: 2;
        }

        .speaker-card--detail.speaker-card--reversed .speaker-card__content {
          order: 1;
        }

        .speaker-card--detail .speaker-card__content {
          padding: clamp(2rem, 5vw, 4rem);
        }

        .speaker-card--detail .speaker-card__role {
          margin-bottom: 0.8rem;
        }

        .speaker-card--detail .speaker-card__name {
          margin-bottom: 1.75rem;
          font-size: clamp(2rem, 5vw, 3.4rem);
        }

        .speaker-card__bio {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .speaker-card__bio > p {
          color: #b5b5b5;
          font-size: 1rem;
          line-height: 1.9;
        }

        .speakers-section__coming-soon {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: clamp(1.5rem, 4vw, 3rem);
          max-width: 1080px;
          margin: 5rem auto 0;
          padding: clamp(2rem, 5vw, 3.5rem) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .speakers-section__coming-soon-mark {
          display: grid;
          width: clamp(4.5rem, 10vw, 7rem);
          aspect-ratio: 1;
          place-items: center;
          border: 1px solid rgba(235, 0, 40, 0.7);
          border-radius: 50%;
          color: var(--speaker-accent);
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 200;
          line-height: 1;
        }

        .speakers-section__coming-soon-label {
          margin-bottom: 0.55rem;
          color: var(--speaker-accent);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .speakers-section__coming-soon-title {
          margin-bottom: 0.75rem;
          font-size: clamp(2rem, 6vw, 4rem);
          line-height: 1;
          text-transform: uppercase;
        }

        .speakers-section__coming-soon-body {
          max-width: 630px;
          color: #a9a9a9;
          line-height: 1.8;
        }

        .speakers-section__empty {
          text-align: center;
          color: #777;
        }

        @media (max-width: 800px) {
          .speakers-section--full {
            padding-top: 8rem;
          }

          .speakers-section__header {
            margin-bottom: 3rem;
          }

          .speakers-section__list {
            gap: 2.5rem;
          }

          .speakers-section__coming-soon {
            margin-top: 3rem;
          }

          .speaker-card--detail,
          .speaker-card--detail.speaker-card--reversed {
            grid-template-columns: 1fr;
          }

          .speaker-card--detail.speaker-card--reversed .speaker-card__image-frame,
          .speaker-card--detail.speaker-card--reversed .speaker-card__content {
            order: initial;
          }

          .speaker-card--detail .speaker-card__image-frame {
            min-height: 0;
            aspect-ratio: 4 / 5;
            max-height: 620px;
          }
        }

        @media (max-width: 480px) {
          .speakers-section__header {
            margin-bottom: 2.5rem;
          }

          .speakers-section__grid {
            gap: 1.5rem;
          }

          .speaker-card--preview {
            flex-basis: 100%;
          }

          .speaker-card--detail .speaker-card__content {
            padding: 1.7rem 1.4rem 2rem;
          }

          .speakers-section__coming-soon {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .speakers-section__coming-soon-mark {
            width: 4rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-card,
          .speaker-card__image,
          .speakers-section__cta {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Speakers;
