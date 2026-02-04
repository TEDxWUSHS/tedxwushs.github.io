import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, PenTool, Layout, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamRecruitment = () => {
    const departments = [
        { title: 'Operations', icon: <Users size={32} />, desc: 'イベントの全体企画、進行、会場設営などを担います。' },
        { title: 'Marketing', icon: <Layout size={32} />, desc: 'SNSやWebサイトを通じた広報活動、ブランディングを担います。' },
        { title: 'Curation', icon: <PenTool size={32} />, desc: 'スピーカーの選定、スピーチ構成のサポートを担います。' },
        { title: 'Creative', icon: <Code size={32} />, desc: 'デザイン、映像制作、Web開発などを担います。' }
    ];

    return (
        <div className="recruit-page" style={{ paddingTop: '120px' }}>
            <div className="container">
                <Link to="/join-us" className="back-link">
                    <ArrowLeft size={16} /> Back to Opportunities
                </Link>

                <header className="recruit-header">
                    <div className="icon-circle"><Users size={48} /></div>
                    <h1>Join the <span className="highlight-red">Team</span></h1>
                    <p className="lead-text">運営、デザイン、広報など、共にイベントを創り上げる仲間を募集しています。</p>
                </header>

                <section className="detail-section">
                    <h2>Departments</h2>
                    <div className="departments-grid">
                        {departments.map((dept, i) => (
                            <div key={i} className="dept-card">
                                <div className="dept-icon">{dept.icon}</div>
                                <h3>{dept.title}</h3>
                                <p>{dept.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="why-join-section">
                    <h2>What we look for</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Passion</h3>
                            <p>アイデアを広めること、新しい価値を創ることに情熱を持っている方。</p>
                        </div>
                        <div className="value-item">
                            <h3>Collaboration</h3>
                            <p>多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。</p>
                        </div>
                        <div className="value-item">
                            <h3>Proactive</h3>
                            <p>自ら考え、行動し、変化を恐れずに挑戦し続けられる方。</p>
                        </div>
                    </div>
                </section>

                <div className="cta-box blue-gradient">
                    <h3>Your Journey Starts Here</h3>
                    <p>早稲田大学高等学院から、世界を動かすチームになりましょう。</p>
                    <button className="btn-white-large">Apply to Join the Team</button>
                </div>
            </div>

            <style jsx>{`
        .recruit-page { background: var(--ted-black); color: white; padding-bottom: 8rem; }
        .back-link { display: flex; align-items: center; gap: 0.5rem; color: #888; font-weight: 600; margin-bottom: 3rem; }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle { width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; }
        h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
        .lead-text { font-size: 1.3rem; color: #aaa; max-width: 650px; margin: 0 auto; }

        h2 { font-size: 2.2rem; margin-bottom: 4rem; text-align: center; }
        
        .departments-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem; margin-bottom: 8rem; }
        .dept-card { background: #111; padding: 3.5rem; border-radius: 20px; transition: var(--transition-smooth); border: 1px solid transparent; }
        .dept-card:hover { border-color: var(--ted-red); transform: translateY(-5px); }
        .dept-icon { color: var(--ted-red); margin-bottom: 1.5rem; }
        .dept-card h3 { font-size: 1.8rem; margin-bottom: 1rem; }
        .dept-card p { color: #888; line-height: 1.8; }

        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-bottom: 8rem; }
        .value-item h3 { color: var(--ted-red); margin-bottom: 1rem; font-size: 1.4rem; }
        .value-item p { color: #ccc; }

        .cta-box { border-radius: 24px; padding: 5rem; text-align: center; background: #eb0028; }
        .cta-box h3 { font-size: 2.5rem; margin-bottom: 1.2rem; }
        .cta-box p { font-size: 1.2rem; margin-bottom: 3rem; opacity: 0.9; }
        .btn-white-large { background: white; color: var(--ted-black); padding: 1.5rem 4rem; border-radius: 100px; font-weight: 800; text-transform: uppercase; transition: var(--transition-smooth); }
        .btn-white-large:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }

        @media (max-width: 768px) {
          .departments-grid, .values-grid { grid-template-columns: 1fr; }
          h1 { font-size: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>
        </div>
    );
};

export default TeamRecruitment;
