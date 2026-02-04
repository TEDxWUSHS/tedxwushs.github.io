import React from 'react';
import { motion } from 'framer-motion';
import { Mic, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpeakerRecruitment = () => {
  const steps = [
    { title: 'Application', desc: 'フォームからあなたのアイデアを応募してください。' },
    { title: 'Audition', desc: '運営チームとの面談で、アイデアを深掘りします。' },
    { title: 'Curation', desc: 'TEDxの基準に合わせて、スピーチを磨き上げます。' },
    { title: 'The Stage', desc: 'TEDxWUSHS Youthのステージで、世界へ発信！' }
  ];

  return (
    <div className="recruit-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/join-us" className="back-link">
          <ArrowLeft size={16} /> Back to Opportunities
        </Link>

        <header className="recruit-header">
          <div className="icon-circle"><Mic size={48} /></div>
          <h1>Become a <span className="highlight-red">Speaker</span></h1>
          <p className="lead-text">あなたの「広める価値のあるアイデア」をステージで共有しませんか？</p>
        </header>

        <section className="detail-section">
          <h2>Why speak at TEDxWUSHS?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <CheckCircle color="#eb0028" size={24} />
              <p>世界中のTEDコミュニティにあなたのアイデアが届きます。</p>
            </div>
            <div className="benefit-card">
              <CheckCircle color="#eb0028" size={24} />
              <p>プロフェッショナルなコーチングでプレゼンスキルが向上します。</p>
            </div>
            <div className="benefit-card">
              <CheckCircle color="#eb0028" size={24} />
              <p>情熱的な仲間や観客との貴重な出会いがあります。</p>
            </div>
          </div>
        </section>

        <section className="process-section">
          <h2>Application Process</h2>
          <div className="steps-container">
            {steps.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-box">
          <h3>Are you ready?</h3>
          <p>あなたのアイデアには、誰かの世界を変える力があります。</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc00EYE-VJXP5QKmI0rAPVIox4JvTGai1prv12fOMLviPG_mA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-large"
          >
            Apply as a Speaker
          </a>
        </div>
      </div>

      <style jsx>{`
        .recruit-page {
          background-color: var(--ted-black);
          color: white;
          padding-bottom: 8rem;
        }
        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #888;
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
        h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
        .lead-text { font-size: 1.5rem; color: #ccc; max-width: 700px; margin: 0 auto; }
        
        .detail-section, .process-section { margin-bottom: 8rem; }
        h2 { font-size: 2rem; margin-bottom: 3rem; text-align: center; }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
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
        .cta-box h3 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-box p { margin-bottom: 3rem; opacity: 0.9; font-size: 1.2rem; }
        .btn-primary-large {
          background: white;
          color: var(--ted-red);
          padding: 1.5rem 4rem;
          border-radius: 100px;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 1.1rem;
          transition: var(--transition-smooth);
        }
        .btn-primary-large:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

        @media (max-width: 900px) {
          .benefits-grid, .steps-container { grid-template-columns: 1fr; }
          h1 { font-size: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default SpeakerRecruitment;
