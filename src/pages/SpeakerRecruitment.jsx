import { Mic, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const contentByLanguage = {
  ja: {
    steps: [
      { title: 'Application', desc: '2026年開催分の応募受付は終了しました。' },
      { title: 'Audition', desc: '運営チームとの面談で、アイデアを深掘りします。' },
      { title: 'Curation', desc: 'TEDxの基準に合わせて、スピーチを磨き上げます。' },
      { title: 'The Stage', desc: 'TEDxWUSHS Youthのステージで、世界へ発信！' }
    ],
    lead: '2026年開催分のスピーカー募集は終了しました。',
    benefits: [
      '世界中のTEDコミュニティにあなたのアイデアが届きます。',
      'プロフェッショナルなコーチングでプレゼンスキルが向上します。',
      '情熱的な仲間や観客との貴重な出会いがあります。'
    ],
    closedMessage: 'たくさんのご応募ありがとうございました。今後の募集については、ウェブサイトとSNSでお知らせします。'
  },
  en: {
    steps: [
      { title: 'Application', desc: 'Applications for the 2026 event have closed.' },
      { title: 'Audition', desc: 'Explore your idea in depth during an interview with the organizing team.' },
      { title: 'Curation', desc: 'Refine your talk in line with TEDx standards.' },
      { title: 'The Stage', desc: 'Share your idea with the world from the TEDxWUSHS Youth stage!' }
    ],
    lead: 'Speaker applications for the 2026 event have closed.',
    benefits: [
      'Share your idea with the global TED community.',
      'Improve your presentation skills through professional coaching.',
      'Connect with passionate peers and audience members.'
    ],
    closedMessage: 'Thank you to everyone who applied. Future opportunities will be announced on this website and our social media channels.'
  }
};

const SpeakerRecruitment = () => {
  const { language } = useLanguage();
  const content = contentByLanguage[language] ?? contentByLanguage.ja;

  return (
    <main id="main-content" tabIndex={-1} className="recruit-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/join-us" className="back-link">
          <ArrowLeft size={16} aria-hidden="true" /> <span lang="en">Back to Opportunities</span>
        </Link>

        <header className="recruit-header">
          <div className="icon-circle" aria-hidden="true"><Mic size={48} /></div>
          <h1 lang="en">Speaker <span className="highlight-red">Applications</span></h1>
          <p className="lead-text">{content.lead}</p>
        </header>

        <section className="detail-section">
          <h2 lang="en">Why speak at TEDxWUSHS Youth?</h2>
          <ul className="benefits-grid">
            {content.benefits.map((benefit) => (
              <li className="benefit-card" key={benefit}>
                <CheckCircle color="#ff5a6d" size={24} aria-hidden="true" />
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="process-section">
          <h2 lang="en">Application Process</h2>
          <ol className="steps-container">
            {content.steps.map((step, index) => (
              <li key={step.title} className="step-item">
                <div className="step-num" aria-hidden="true">{index + 1}</div>
                <h3 lang="en">{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="cta-box" aria-labelledby="speaker-applications-status">
          <h2 id="speaker-applications-status" lang="en">Applications Closed</h2>
          <p>{content.closedMessage}</p>
          <span className="closed-label" lang="en">2026 Speaker Applications Closed</span>
        </section>
      </div>

      <style>{`
        .recruit-page {
          background-color: var(--ted-black);
          color: white;
          padding-bottom: 8rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 44px;
          color: #aaa;
          font-weight: 600;
          margin-bottom: 3rem;
        }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle {
          width: 100px;
          height: 100px;
          background: rgba(235, 0, 40, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: var(--ted-red);
        }
        .recruit-header h1 { font-size: clamp(2.4rem, 9vw, 3.5rem); margin-bottom: 1.5rem; text-wrap: balance; }
        .lead-text { font-size: 1.5rem; color: #ccc; max-width: 700px; margin: 0 auto; }
        
        .detail-section, .process-section { margin-bottom: 8rem; }
        h2 { font-size: 2rem; margin-bottom: 3rem; text-align: center; }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          list-style: none;
        }
        .benefit-card {
          background: #111;
          padding: 2.5rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          text-align: center;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          list-style: none;
        }
        .step-item { text-align: center; }
        .step-num {
          width: 40px;
          height: 40px;
          background: var(--ted-red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-weight: 800;
        }

        .cta-box {
          background: linear-gradient(135deg, var(--ted-red), #900);
          padding: 5rem;
          border-radius: 24px;
          text-align: center;
        }
        .cta-box h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-box p { margin-bottom: 3rem; color: white; font-size: 1.2rem; }
        .closed-label {
          display: inline-block;
          background: white;
          color: var(--ted-red);
          padding: 1.2rem 2.5rem;
          border-radius: 100px;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.9rem;
          max-width: 100%;
          white-space: normal;
          overflow-wrap: anywhere;
        }

        @media (max-width: 900px) {
          .benefits-grid, .steps-container { grid-template-columns: 1fr; }
          .recruit-header h1 { font-size: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
          .closed-label { padding: 1rem 1.25rem; font-size: 0.75rem; }
        }

        @media (max-width: 360px) {
          .cta-box { padding-right: 1rem; padding-left: 1rem; }
          .cta-box h2 { font-size: clamp(1.7rem, 9vw, 2.5rem); line-height: 1.1; }
          .benefit-card { padding: 2rem 1.25rem; }
          .closed-label { padding-right: 0.75rem; padding-left: 0.75rem; font-size: 0.7rem; }
        }
      `}</style>
    </main>
  );
};

export default SpeakerRecruitment;
