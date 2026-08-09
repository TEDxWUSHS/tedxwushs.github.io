import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock3, MapPin } from 'lucide-react';
import poster from '../assets/poster.png';
import { useLanguage } from '../i18n/LanguageContext';

const heroCopy = {
  ja: {
    description: '早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアには、すべてを変える力がある。その可能性を高等学院から。',
    eventLabel: '開催情報',
    date: '2026年10月31日（土）',
    reception: '受付開始 13:30',
    venue: '早稲田大学高等学院 講堂'
  },
  en: {
    description: 'TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.',
    eventLabel: 'Event details',
    date: 'Saturday, October 31, 2026',
    reception: 'Doors open 1:30 PM',
    venue: 'Waseda University Senior High School Auditorium'
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const copy = heroCopy[language];

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            TEDxWUSHS Youth · Waseda University Senior High School
          </motion.span>
          <h1 className="hero-title">
            Ideas change <br /> <span className="highlight-red">everything.</span>
          </h1>
          <p className="hero-description">
            {copy.description}
          </p>
          <div className="hero-event-details" aria-label={copy.eventLabel}>
            <div className="hero-event-detail">
              <CalendarDays size={22} aria-hidden="true" />
              <div>
                <span>Date</span>
                <strong>{copy.date}</strong>
              </div>
            </div>
            <div className="hero-event-detail">
              <Clock3 size={22} aria-hidden="true" />
              <div>
                <span>Time</span>
                <strong>14:00～18:00</strong>
                <small>{copy.reception}</small>
              </div>
            </div>
            <div className="hero-event-detail">
              <MapPin size={22} aria-hidden="true" />
              <div>
                <span>Venue</span>
                <strong>{copy.venue}</strong>
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-primary">Discover More</Link>
            <Link to="/join-us" className="btn btn-outline">Join Us</Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="poster-container">
            <img src={poster} alt="TEDxWUSHS Youth Poster" className="hero-poster" />
            <div className="poster-glow"></div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          background: radial-gradient(circle at 10% 20%, rgba(235, 0, 40, 0.05) 0%, transparent 50%);
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

        .hero-event-details {
          display: grid;
          gap: 0.75rem;
          max-width: 580px;
          margin-bottom: 2.5rem;
        }

        .hero-event-detail {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 0.9rem;
          align-items: center;
          padding: 0.9rem 1rem;
          border-left: 3px solid var(--ted-red);
          background: rgba(255, 255, 255, 0.045);
          text-align: left;
        }

        .hero-event-detail > svg {
          color: var(--ted-red);
        }

        .hero-event-detail div {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem 0.75rem;
          align-items: baseline;
        }

        .hero-event-detail span {
          min-width: 50px;
          color: var(--ted-red);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-event-detail strong {
          color: white;
          font-size: 1rem;
        }

        .hero-event-detail small {
          color: #999;
          font-size: 0.8rem;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
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
          background-color: #ff1a40;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(235, 0, 40, 0.3);
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
          position: relative;
        }

        .hero-poster {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
          will-change: transform;
        }

        .poster-glow {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, rgba(235, 0, 40, 0.4) 0%, rgba(235, 0, 40, 0) 70%);
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
          .hero-event-details {
            margin: 0 auto 2.5rem;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
            order: -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
