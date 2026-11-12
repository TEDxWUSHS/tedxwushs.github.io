import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { mainEventCover } from '../data/mainEventArchive';
import { useLanguage } from '../i18n/LanguageContext';

const heroCopy = {
  ja: {
    description: '早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアは世界を変える。その可能性を高等学院から。',
    deadlineLabel: 'TEDx WUSHS Youth 2026は無事に開催できました',
    deadlineDate: 'ご参加・ご協力ありがとうございました',
    programAction: '2026 メインイベントの記録を見る',
    allArchivesAction: 'イベントアーカイブ一覧',
    archiveDescription: '当日の写真やオープニングムービー、登壇者とトークの紹介をアーカイブで公開しています。',
  },
  en: {
    description: 'TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.',
    deadlineLabel: 'TEDx WUSHS Youth 2026 was successfully held',
    deadlineDate: 'Thank you for joining and supporting us',
    programAction: 'Explore the Main Event',
    allArchivesAction: 'All Event Archives',
    archiveDescription: 'Revisit the day through photographs, the opening movie, and speaker and talk introductions in our archive.',
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = heroCopy[language];

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          <Link className="hero-deadline-notice" to="/archives/2026/main-event">
            <span className="hero-deadline-copy"><span>{copy.deadlineLabel}</span><strong>{copy.deadlineDate}</strong></span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
          <motion.span
            className="hero-tagline"
            lang="en"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.5 }}
          >
            <span className="brand-name">TEDxWUSHS Youth</span> · Waseda University Senior High School
          </motion.span>
          <h1 className="hero-title" lang="en">
            Ideas change <br /> <span className="highlight-red">everything.</span>
          </h1>
          <p className="hero-description">
            {copy.description}
          </p>
          <p className="hero-description">{copy.archiveDescription}</p>
          <div className="hero-cta">
            <Link to="/archives/2026/main-event" className="btn btn-primary">{copy.programAction}</Link>
            <Link to="/archives" className="btn btn-outline">{copy.allArchivesAction}</Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: "easeOut" }}
        >
          <Link className="poster-container" to="/archives/2026/main-event" aria-label={copy.programAction}>
            <img src={mainEventCover.src} width={mainEventCover.width} height={mainEventCover.height} alt={mainEventCover.caption[language]} className="hero-poster" />
            <div className="poster-glow" aria-hidden="true"></div>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow-x: hidden;
          background: radial-gradient(circle at 10% 20%, rgb(var(--ted-red-rgb) / 0.05) 0%, transparent 50%);
        }

        @supports (overflow-x: clip) {
          .hero {
            overflow-x: clip;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-tagline {
          color: var(--ted-red);
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-deadline-notice {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          max-width: 580px;
          min-height: 52px;
          margin-bottom: 1.25rem;
          padding: 0.8rem 1rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.5);
          border-left: 4px solid var(--ted-red);
          background: rgb(var(--ted-red-rgb) / 0.12);
          color: var(--ted-white);
          transition: var(--transition-smooth);
        }

        .hero-deadline-notice:hover {
          background: rgb(var(--ted-red-rgb) / 0.2);
          border-color: var(--ted-red);
        }

        .hero-deadline-notice:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 3px;
        }

        .hero-deadline-copy {
          display: grid;
          gap: 0.15rem;
          min-width: 0;
        }

        .hero-deadline-copy span {
          color: #ddd;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-deadline-copy strong {
          color: var(--ted-white);
          font-size: 1rem;
          line-height: 1.35;
        }

        .hero-deadline-notice > svg {
          flex: 0 0 auto;
          color: var(--ted-red);
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 2rem;
          text-transform: none;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #aaa;
          max-width: 500px;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 1rem 2.5rem;
          border-radius: 4px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .btn-primary {
          background-color: var(--ted-red);
          color: var(--ted-white);
        }

        .btn-primary:hover {
          background-color: var(--ted-red);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgb(var(--ted-red-rgb) / 0.3);
        }

        .btn-outline {
          border: 2px solid var(--ted-white);
          color: var(--ted-white);
        }

        .btn-outline:hover {
          background: var(--ted-white);
          color: var(--ted-black);
          transform: translateY(-5px);
        }

        .poster-container {
          display: block;
          position: relative;
        }

        .hero-poster {
          display: block;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
          max-height: 620px;
          object-fit: contain;
        }

        .poster-glow {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, rgb(var(--ted-red-rgb) / 0.4) 0%, rgb(var(--ted-red-rgb) / 0) 70%);
          opacity: 0.6;
          z-index: 1;
          will-change: transform;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-bottom: 60px;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-description {
            margin: 0 auto 2rem;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 400px) {
          .hero-container {
            gap: 2.5rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 14vw, 3rem);
          }

          .hero-event-detail {
            grid-template-columns: 24px minmax(0, 1fr);
            gap: 0.65rem;
            padding-right: 0.75rem;
            padding-left: 0.75rem;
          }

          .hero-cta {
            gap: 1rem;
          }

          .btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .btn { transition: none; }
          .btn:hover { transform: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
