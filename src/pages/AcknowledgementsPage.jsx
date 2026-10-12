import { useLanguage } from '../i18n/LanguageContext';

const contentByLanguage = {
  ja: {
    eyebrow: 'Acknowledgements',
    title: '謝礼',
    intro: 'TEDxWUSHS Youthの活動にご協力いただいた皆さまに、心より感謝申し上げます。',
    schoolsLabel: 'English Debate',
    schoolsTitle: '英語ディベート参加校',
    schoolsDescription: '2026年の学院祭企画にご参加いただき、ありがとうございました。',
    schools: ['頌栄女子学院高等学校', '慶應義塾高等学校', '早稲田大学本庄高等学院 ESS'],
    partnerLabel: 'Special Thanks',
    partnerTitle: 'TEDxTeikyoU',
    partnerDescription: 'ロゴモニュメントをお貸しいただき、またスピーカーコーチングにご協力いただきました。心より感謝申し上げます。',
    contributions: ['ロゴモニュメントの貸し出し', 'スピーカーコーチングへの協力'],
  },
  en: {
    eyebrow: 'Acknowledgements',
    title: 'Acknowledgements',
    intro: 'We sincerely thank everyone who has supported the work of TEDxWUSHS Youth.',
    schoolsLabel: 'English Debate',
    schoolsTitle: 'Participating Schools',
    schoolsDescription: 'Thank you for joining our English debate program at the 2026 school festival.',
    schools: ['Shoei Girls’ Senior High School', 'Keio Senior High School', 'Waseda University Honjo Senior High School ESS'],
    partnerLabel: 'Special Thanks',
    partnerTitle: 'TEDxTeikyoU',
    partnerDescription: 'We sincerely thank TEDxTeikyoU for lending us its logo monument and supporting our speaker coaching.',
    contributions: ['Logo monument loan', 'Speaker coaching support'],
  },
};

const AcknowledgementsPage = () => {
  const { language } = useLanguage();
  const copy = contentByLanguage[language] ?? contentByLanguage.ja;

  return (
    <main id="main-content" tabIndex={-1} className="acknowledgements-page">
      <header className="acknowledgements-hero" aria-labelledby="acknowledgements-title">
        <div className="container acknowledgements-hero__inner">
          <p className="acknowledgements-eyebrow" lang="en">{copy.eyebrow}</p>
          <h1 id="acknowledgements-title">{copy.title}</h1>
          <p className="acknowledgements-hero__intro">{copy.intro}</p>
        </div>
      </header>

      <section className="acknowledgements-section" aria-labelledby="acknowledgements-schools-title">
        <div className="container acknowledgements-section__layout">
          <header>
            <p className="acknowledgements-eyebrow" lang="en">{copy.schoolsLabel}</p>
            <h2 id="acknowledgements-schools-title">{copy.schoolsTitle}</h2>
            <p>{copy.schoolsDescription}</p>
          </header>
          <ul className="acknowledgements-list">
            {copy.schools.map((school) => <li key={school}>{school}</li>)}
          </ul>
        </div>
      </section>

      <section className="acknowledgements-section acknowledgements-section--partner" aria-labelledby="acknowledgements-partner-title">
        <div className="container acknowledgements-section__layout">
          <header>
            <p className="acknowledgements-eyebrow" lang="en">{copy.partnerLabel}</p>
            <h2 id="acknowledgements-partner-title" lang="en">{copy.partnerTitle}</h2>
            <p>{copy.partnerDescription}</p>
          </header>
          <ul className="acknowledgements-list acknowledgements-list--accent">
            {copy.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
          </ul>
        </div>
      </section>

      <style>{`
        .acknowledgements-page {
          width: 100%;
          min-height: 100vh;
          background: var(--ted-black);
          color: var(--ted-white);
        }

        .acknowledgements-hero {
          padding: 10rem 0 5rem;
          background: linear-gradient(120deg, rgb(var(--ted-red-rgb) / 0.14), transparent 38rem), var(--ted-black);
        }

        .acknowledgements-hero__inner {
          max-width: 880px;
        }

        .acknowledgements-eyebrow {
          margin-bottom: 0.8rem;
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .acknowledgements-hero h1 {
          font-size: clamp(2.25rem, 6vw, 4.25rem);
          line-height: 1;
          text-transform: none;
        }

        .acknowledgements-hero__intro {
          max-width: 58ch;
          margin-top: 1.5rem;
          color: #b8b8b8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .acknowledgements-section {
          padding: 5rem 0;
          background: #0b0b0b;
        }

        .acknowledgements-section--partner {
          background: var(--ted-dark-gray);
        }

        .acknowledgements-section__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(300px, 1.1fr);
          gap: clamp(3rem, 8vw, 7rem);
          align-items: start;
        }

        .acknowledgements-section h2 {
          max-width: 15ch;
          font-size: clamp(1.55rem, 3.2vw, 2.4rem);
          line-height: 1.15;
          text-transform: none;
        }

        .acknowledgements-section header > p:last-child {
          max-width: 56ch;
          margin-top: 1.25rem;
          color: #aaa;
          line-height: 1.75;
        }

        .acknowledgements-list {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .acknowledgements-list li {
          position: relative;
          padding: 1.35rem 0 1.35rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 700;
          line-height: 1.5;
        }

        .acknowledgements-list li::before {
          content: '';
          position: absolute;
          top: 1.95rem;
          left: 0;
          width: 7px;
          height: 7px;
          background: var(--ted-red);
        }

        .acknowledgements-list--accent {
          border-top-color: var(--ted-red);
        }

        @media (max-width: 760px) {
          .acknowledgements-hero {
            padding: 8rem 0 4rem;
          }

          .acknowledgements-hero h1 {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .acknowledgements-section {
            padding: 4rem 0;
          }

          .acknowledgements-section__layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </main>
  );
};

export default AcknowledgementsPage;
