import { Users, Code, Mic, Layout, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const contentByLanguage = {
    ja: {
        departmentDescriptions: [
            'イベントの全体企画、進行、会場設営などを担います。',
            'SNSやWebサイトを通じた広報活動、ブランディングを担います。',
            'スピーカーの選定、スピーチ構成のサポートを担います。',
            'デザイン、映像制作、Web開発などを担います。'
        ],
        lead: '2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。',
        values: [
            'アイデアを広めること、新しい価値を創ることに情熱を持っている方。',
            '多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。',
            '自ら考え、行動し、変化を恐れずに挑戦し続けられる方。'
        ],
        closedMessage: '次回の募集については、ウェブサイトと公式SNSでお知らせします。'
    },
    en: {
        departmentDescriptions: [
            'Oversees overall event planning, program flow, venue setup, and related operations.',
            'Handles promotion and branding through social media and the website.',
            'Handles speaker selection and supports the development of talks.',
            'Handles design, video production, web development, and related creative work.'
        ],
        lead: 'Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.',
        values: [
            'Passionate about sharing ideas and creating new value.',
            'Respects diverse perspectives and brings out the best in the team through collaboration.',
            'Thinks and acts independently, and continues to take on challenges without fearing change.'
        ],
        closedMessage: 'Future recruitment opportunities will be announced on this website and our official social media channels.'
    }
};

const TeamRecruitment = () => {
    const { language } = useLanguage();
    const content = contentByLanguage[language] ?? contentByLanguage.ja;
    const departments = [
        { title: 'Operations', icon: <Users size={32} aria-hidden="true" />, desc: content.departmentDescriptions[0] },
        { title: 'Marketing', icon: <Layout size={32} aria-hidden="true" />, desc: content.departmentDescriptions[1] },
        { title: 'Speaker', icon: <Mic size={32} aria-hidden="true" />, desc: content.departmentDescriptions[2] },
        { title: 'Creative', icon: <Code size={32} aria-hidden="true" />, desc: content.departmentDescriptions[3] }
    ];

    return (
        <main id="main-content" tabIndex={-1} className="recruit-page" style={{ paddingTop: '120px' }}>
            <div className="container">
                <Link to="/join-us" className="back-link">
                    <ArrowLeft size={16} aria-hidden="true" /> <span lang="en">Back to Opportunities</span>
                </Link>

                <header className="recruit-header">
                    <div className="icon-circle" aria-hidden="true"><Users size={48} /></div>
                    <span className="recruitment-status" lang="en">2026 Recruitment Closed</span>
                    <h1 lang="en">Join the <span className="highlight-red">Team</span></h1>
                    <p className="lead-text">{content.lead}</p>
                </header>

                <section className="detail-section">
                    <h2 lang="en">Departments</h2>
                    <div className="departments-grid">
                        {departments.map((dept, i) => (
                            <div key={i} className="dept-card">
                                <div className="dept-icon">{dept.icon}</div>
                                <h3 lang="en">{dept.title}</h3>
                                <p>{dept.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="why-join-section">
                    <h2 lang="en">What we look for</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3 lang="en">Passion</h3>
                            <p>{content.values[0]}</p>
                        </div>
                        <div className="value-item">
                            <h3 lang="en">Collaboration</h3>
                            <p>{content.values[1]}</p>
                        </div>
                        <div className="value-item">
                            <h3 lang="en">Proactive</h3>
                            <p>{content.values[2]}</p>
                        </div>
                    </div>
                </section>

                <section className="cta-box" aria-labelledby="team-recruitment-status-heading">
                    <h2 id="team-recruitment-status-heading" lang="en">Recruitment Closed</h2>
                    <p>{content.closedMessage}</p>
                    <span className="closed-label" lang="en">2026 Team Recruitment Closed</span>
                </section>
            </div>

            <style>{`
        .recruit-page { background: var(--ted-black); color: white; padding-bottom: 8rem; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; min-height: 44px; color: #aaa; font-weight: 600; margin-bottom: 3rem; }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle { width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; }
        .recruitment-status { display: inline-block; margin-bottom: 1rem; color: var(--ted-red); font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .recruit-header h1 { font-size: clamp(2.4rem, 9vw, 3.5rem); margin-bottom: 1.5rem; text-wrap: balance; }
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

        .cta-box { border-radius: 24px; padding: 5rem; text-align: center; background: var(--ted-red); }
        .cta-box h2 { font-size: 2.5rem; margin-bottom: 1.2rem; }
        .cta-box p { color: white; font-size: 1.2rem; margin-bottom: 3rem; }
        .closed-label { display: inline-block; max-width: 100%; background: white; color: var(--ted-red); padding: 1.3rem 2.5rem; border-radius: 100px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; overflow-wrap: anywhere; }

        @media (max-width: 768px) {
          .departments-grid, .values-grid { grid-template-columns: 1fr; }
          .recruit-header h1 { font-size: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
          .closed-label { padding: 1rem 1.25rem; font-size: 0.72rem; }
        }

        @media (max-width: 360px) {
          .cta-box { padding-right: 1rem; padding-left: 1rem; }
          .cta-box h2 { font-size: clamp(1.7rem, 9vw, 2.5rem); line-height: 1.1; }
          .dept-card { padding: 2rem 1.25rem; }
          .dept-card h3 { font-size: clamp(1.4rem, 8vw, 1.8rem); }
          .closed-label { padding-right: 0.75rem; padding-left: 0.75rem; font-size: 0.68rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dept-card { transition: none; }
          .dept-card:hover { transform: none; }
        }
      `}</style>
        </main>
    );
};

export default TeamRecruitment;
