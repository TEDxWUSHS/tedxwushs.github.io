/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion';

// SpeakerCard receives normalized entries from src/data/speakers.js.
const SpeakerCard = ({ speaker, language, variant, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const isDetailed = variant === 'detail';
  const Heading = isDetailed ? 'h2' : 'h3';
  const name = speaker.name[language] ?? speaker.name.ja;
  const role = speaker.role[language] ?? speaker.role.ja;
  const shortBio = speaker.shortBio[language] ?? speaker.shortBio.ja;
  const bio = speaker.bio[language] ?? speaker.bio.ja;
  const talkDescription = speaker.talkDescription?.[language];
  const alt = language === 'en' ? `Portrait of ${name}` : `${name}のプロフィール写真`;

  return (
    <motion.article
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
          alt={alt}
          className="speaker-card__image"
          loading={isDetailed && index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className="speaker-card__content">
        <p className="speaker-card__role">{role}</p>
        <Heading className="speaker-card__name">{name}</Heading>

        {isDetailed ? (
          <div className="speaker-card__bio">
            {bio.map((paragraph, paragraphIndex) => (
              <p key={`${speaker.id}-bio-${paragraphIndex}`}>{paragraph}</p>
            ))}

            {talkDescription && (
              <p>{talkDescription}</p>
            )}
          </div>
        ) : (
          <p className="speaker-card__summary">{shortBio}</p>
        )}
      </div>
    </motion.article>
  );
};

export default SpeakerCard;
