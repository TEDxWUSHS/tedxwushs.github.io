import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Bell, Calendar, ArrowLeft } from 'lucide-react';
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
                    <p className="lead-text">最新情報を受け取り、次回のイベント参加チケットを予約しましょう。</p>
                </header>

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
                                <p>次回のカンファレンスの日程は現在調整中です。決定次第、メールにてお知らせいたします。</p>
                            </div>
                        </section>
                    </div>

                    <div className="form-side">
                        <div className="registration-card">
                            <h3>Priority Access</h3>
                            <p>優先案内リストに登録する</p>

                            <a
                                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary-full"
                            >
                                Register Now
                            </a>

                            <p className="form-note">
                                ※新しいタブでフォームが開きます
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .recruit-page { background: var(--ted-black); color: white; padding-bottom: 8rem; }
        .back-link { display: flex; align-items: center; gap: 0.5rem; color: #888; font-weight: 600; margin-bottom: 3rem; }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle { width: 100px; height: 100px; background: rgba(235, 0, 40, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; color: var(--ted-red); }
        h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
        .lead-text { font-size: 1.3rem; color: #aaa; max-width: 600px; margin: 0 auto; }

        .audience-layout { display: grid; grid-template-columns: 1fr 450px; gap: 4rem; align-items: start; margin-top: 4rem; }
        
        .info-block { display: flex; gap: 2rem; margin-bottom: 4rem; }
        .info-icon { width: 48px; height: 48px; min-width: 48px; background: #111; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--ted-red); border: 1px solid rgba(255,255,255,0.05); }
        .info-block h3 { font-size: 1.5rem; margin-bottom: 0.8rem; }
        .info-block p { color: #888; line-height: 1.7; }

        .registration-card { background: #111; padding: 3rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .registration-card h3 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .registration-card p { color: #666; margin-bottom: 2.5rem; }

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
      `}</style>
        </div>
    );
};

export default AudienceRegistration;
