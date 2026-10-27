/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const cardCopy = {
  ja: {
    profileLabel: 'プロフィール',
    talkLabel: 'トーク紹介',
    showDetails: 'プロフィールとトーク紹介を見る',
    hideDetails: '詳細を閉じる',
    viewSpeaker: '詳しく見る',
  },
  en: {
    profileLabel: 'Profile',
    talkLabel: 'About the talk',
    showDetails: 'View profile and talk details',
    hideDetails: 'Close details',
    viewSpeaker: 'View details',
  },
};

// SpeakerCard receives normalized entries from src/data/speakers.js.
const SpeakerCard = ({ speaker, language, variant, index, initiallyExpanded = false }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  const isDetailed = variant === 'detail';
  const Heading = isDetailed ? 'h2' : 'h3';
  const copy = cardCopy[language] ?? cardCopy.ja;
  const name = speaker.name[language] ?? speaker.name.ja;
  const role = speaker.role[language] ?? speaker.role.ja;
  const shortBio = speaker.shortBio[language] ?? speaker.shortBio.ja;
  const intro = speaker.intro[language] ?? speaker.intro.ja;
  const talkTitle = speaker.talk?.title[language] ?? speaker.talk?.title.ja;
  const talkLanguage = speaker.talk?.language[language] ?? speaker.talk?.language.ja;
  const talkDescription = speaker.talk?.description[language] ?? speaker.talk?.description.ja;
  const detailsId = `speaker-${speaker.id}-details`;

  useEffect(() => {
    if (initiallyExpanded) setIsExpanded(true);
  }, [initiallyExpanded]);

  return (
    <motion.article
      id={isDetailed ? `speaker-${speaker.id}` : undefined}
      className={`speaker-card speaker-card--${variant}${isDetailed && index % 2 === 1 ? ' speaker-card--reversed' : ''}`}
      style={{ '--speaker-image-position': speaker.imagePosition }}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.55, delay: isDetailed ? 0 : Math.min(index * 0.07, 0.28) }}
    >
      <div className="speaker-card__image-frame">
        <img
          src={speaker.image}
          alt=""
          className="speaker-card__image"
          loading={isDetailed && index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className="speaker-card__content">
        <p className="speaker-card__role">{role}</p>
        <Heading className="speaker-card__name">{name}</Heading>

        {isDetailed ? (
          <>
            <button
              className="speaker-card__mobile-toggle"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              onClick={() => setIsExpanded((currentValue) => !currentValue)}
            >
              <span>{isExpanded ? copy.hideDetails : copy.showDetails}</span>
              <ChevronDown
                className="speaker-card__mobile-toggle-icon"
                size={20}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>

            <div
              id={detailsId}
              className={`speaker-card__details${isExpanded ? ' speaker-card__details--expanded' : ''}`}
            >
              <div className="speaker-card__bio">
                <p className="speaker-card__detail-label">{copy.profileLabel}</p>
                {intro.map((paragraph, paragraphIndex) => (
                  <p key={`${speaker.id}-intro-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>

              {speaker.talk && (
                <section className="speaker-card__talk" aria-labelledby={`${speaker.id}-talk-title`}>
                  <div className="speaker-card__talk-meta">
                    <p className="speaker-card__detail-label">{copy.talkLabel}</p>
                    <p className="speaker-card__talk-language">{talkLanguage}</p>
                  </div>
                  <h3 id={`${speaker.id}-talk-title`} className="speaker-card__talk-title">
                    {talkTitle}
                  </h3>
                  <p className="speaker-card__talk-description">{talkDescription}</p>
                </section>
              )}
            </div>
          </>
        ) : (
          <>
            <p className="speaker-card__summary">{shortBio}</p>
            <Link className="speaker-card__details-link" to={`/speakers#speaker-${speaker.id}`}>
              {copy.viewSpeaker}
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </>
        )}
      </div>
    </motion.article>
  );
};

export default SpeakerCard;
