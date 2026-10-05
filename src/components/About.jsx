import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import logoRed from '../assets/logo_red.png';

const aboutCopy = {
  ja: {
    programLink: 'TEDxプログラムについて詳しく見る',
    descriptions: [
      'TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。',
      'TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxWUSHS Youthでは、TED Talksの映像と7名のライブスピーカーによるトークを組み合わせ、対話とつながりを生み出します。',
      '2026年のテーマは「Breakshot」。人生の軌道を変えた一打をテーマに、7名のスピーカーがそれぞれのアイデアを共有します。',
    ],
    venue: '早稲田大学高等学院 講堂',
  },
  en: {
    programLink: 'Learn more about the TEDx program',
    descriptions: [
      'TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.',
      'TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDxWUSHS Youth combines TED Talks video with talks from seven live speakers to spark discussion and connection.',
      'Our 2026 theme is “Breakshot.” Seven speakers will share the ideas and defining moments that changed the course of their lives.',
    ],
    venue: 'Waseda University Senior High School Auditorium',
  }
};

const About = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = aboutCopy[language];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-item about-item--combined"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <h2 className="about-logo-heading">
              <img src={logoRed} alt="TEDxWUSHS Youth" className="about-logo" />
            </h2>
            <div className="about-description">
              {copy.descriptions.map((description) => <p key={description}>{description}</p>)}
            </div>
            <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener noreferrer" className="highlight-link program-link">
              {copy.programLink} ↗
            </a>
            <p className="event-info">
              <strong lang="en">Date:</strong> <span lang="en">October 31, 2026 (14:00 - 18:00 / Reception 13:30)</span><br />
              <strong lang="en">Venue:</strong> <a href="https://www.waseda.jp/school/shs/" target="_blank" rel="noopener noreferrer" className="highlight-link">{copy.venue}</a>, <span lang="en">Nerima, Tokyo</span>
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about {
          background-color: var(--ted-dark-gray);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: 'IDEAS';
          position: absolute;
          top: -20px;
          right: -50px;
          font-size: 15rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.02);
          z-index: 0;
          pointer-events: none;
        }

        .about-grid {
          position: relative;
          z-index: 1;
        }

        .about-item--combined {
          max-width: 900px;
        }

        .about-logo-heading {
          margin: 0 0 2rem;
          line-height: 0;
        }

        .about-logo {
          display: block;
          width: min(100%, 420px);
          height: auto;
        }

        .about-item p {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .about-description p:last-child {
          margin-bottom: 0;
        }

        .about .highlight-link {
          color: var(--ted-red);
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: underline;
        }

        .program-link {
          display: inline-block;
          margin-top: 1rem;
          font-weight: 700;
        }

        .event-info {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-left: 4px solid var(--ted-red);
          border-radius: 4px;
        }

        .event-info strong {
          color: var(--ted-red);
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        @media (max-width: 480px) {
          .event-info {
            padding: 1.25rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
