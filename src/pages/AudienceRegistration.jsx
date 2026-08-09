import { Ticket, Bell, Calendar, ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudienceRegistration = () => {
    return (
        <div className="recruit-page" style={{ paddingTop: '120px' }}>
            <div className="container">
                <Link to="/join-us" className="back-link">
                    <ArrowLeft size={16} /> Back to Opportunities
                </Link>

                <header className="recruit-header">
                    <div className="icon-circle"><Ticket size={48} /></div>
                    <h1>Register as <span className="highlight-red">Audience</span></h1>
                    <p className="lead-text">参加申込みは2026年9月開始予定です。受付開始まで今しばらくお待ちください。</p>
                </header>

                <section className="eligibility-panel" aria-labelledby="audience-eligibility-title">
                    <div className="eligibility-icon"><Users size={36} aria-hidden="true" /></div>
                    <div>
                        <span className="eligibility-label">Audience Eligibility / 参加対象</span>
                        <h2 id="audience-eligibility-title">早稲田大学高等学院の生徒及びその保護者</h2>
                        <p>本イベントの会場参加は、上記の方を対象としています。対象をご確認のうえ、受付開始をお待ちください。</p>
                    </div>
                </section>

                <div className="audience-layout">
                    <div className="info-side">
                        <section className="info-block">
                            <div className="info-icon"><Bell size={24} /></div>
                            <div>
                                <h3>Be the First to Know</h3>
                                <p>ニュースレターに登録して、チケット販売開始の通知や、公開前のスピーカー情報をいち早く入手しましょう。</p>
                            </div>
                        </section>

                        <section className="info-block">
                            <div className="info-icon"><Calendar size={24} /></div>
                            <div>
                                <h3>Upcoming Events</h3>
                                <p>2026年10月31日（土）14:00〜18:00、早稲田大学高等学院 講堂にて開催します（受付開始13:30）。</p>
                            </div>
                        </section>
                    </div>

                    <div className="form-side">
                        <div className="registration-card">
                            <span className="registration-status">Coming in September</span>
                            <h3>参加申込みについて</h3>
                            <p>申込みは2026年9月開始予定です。開始時にウェブサイトとSNSでご案内します。</p>
                            <div className="registration-audience">
                                <span>対象</span>
                                <strong>学院生・保護者</strong>
                            </div>
                            <div className="registration-date">2026.09</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .recruit-page { background: var(--ted-black); color: white; padding-bottom: 8rem; }
        .back-link { display: flex; align-items: center; gap: 0.5rem; color: #888; font-weight: 600; margin-bottom: 3rem; }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle { width: 100px; height: 100px; background: rgba(235, 0, 40, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; color: var(--ted-red); }
        h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
        .lead-text { font-size: 1.3rem; color: #aaa; max-width: 600px; margin: 0 auto; }

        .eligibility-panel { display: grid; grid-template-columns: auto 1fr; gap: 2rem; align-items: center; max-width: 980px; margin: -2rem auto 6rem; padding: 2.5rem 3rem; background: white; color: var(--ted-black); border-left: 8px solid var(--ted-red); border-radius: 16px; box-shadow: 0 24px 60px rgba(0,0,0,0.45); }
        .eligibility-icon { width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(235,0,40,0.1); color: var(--ted-red); }
        .eligibility-label { display: block; margin-bottom: 0.55rem; color: var(--ted-red); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .eligibility-panel h2 { margin: 0 0 0.65rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.35; text-align: left; }
        .eligibility-panel p { color: #555; line-height: 1.7; }

        .audience-layout { display: grid; grid-template-columns: 1fr 450px; gap: 4rem; align-items: start; margin-top: 4rem; }
        
        .info-block { display: flex; gap: 2rem; margin-bottom: 4rem; }
        .info-icon { width: 48px; height: 48px; min-width: 48px; background: #111; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--ted-red); border: 1px solid rgba(255,255,255,0.05); }
        .info-block h3 { font-size: 1.5rem; margin-bottom: 0.8rem; }
        .info-block p { color: #888; line-height: 1.7; }

        .registration-card { background: #111; padding: 3rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .registration-card h3 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .registration-card p { color: #666; margin-bottom: 2.5rem; }

        .registration-status { display: inline-block; margin-bottom: 1rem; color: var(--ted-red); font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .registration-audience { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1rem; padding: 0.9rem 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; }
        .registration-audience span { color: #888; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
        .registration-audience strong { color: white; }
        .registration-date { padding: 1rem; border: 1px solid rgba(235,0,40,0.45); border-radius: 8px; color: var(--ted-red); font-family: var(--font-heading); font-size: 2rem; font-weight: 800; text-align: center; }

        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 0.5rem; }
        input, select { width: 100%; background: #222; border: 1px solid #333; padding: 1rem; border-radius: 8px; color: white; font-family: inherit; }
        input:focus, select:focus { outline: none; border-color: var(--ted-red); }

        .btn-primary-full { 
          width: 100%; 
          background: var(--ted-red); 
          color: white; 
          padding: 1.2rem; 
          border-radius: 8px; 
          font-weight: 800; 
          text-transform: uppercase; 
          margin-top: 1rem; 
          transition: var(--transition-smooth);
          display: block;
          text-align: center;
          text-decoration: none;
        }
        .btn-primary-full:hover { background: #ff1a40; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(235, 0, 40, 0.3); }

        .form-note {
          margin-top: 1.5rem;
          color: #666;
          font-size: 0.85rem;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .audience-layout { grid-template-columns: 1fr; }
          .registration-card { order: -1; }
          h1 { font-size: 2.5rem; }
        }

        @media (max-width: 640px) {
          .eligibility-panel { grid-template-columns: 1fr; gap: 1.25rem; margin-top: -2.5rem; padding: 2rem 1.5rem; text-align: center; }
          .eligibility-icon { margin: 0 auto; }
          .eligibility-panel h2 { text-align: center; }
        }
      `}</style>
        </div>
    );
};

export default AudienceRegistration;
