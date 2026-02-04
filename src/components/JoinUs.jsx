import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mic, Ticket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  const opportunities = [
    {
      title: 'Become a Speaker',
      icon: <Mic size={32} />,
      description: 'あなたの「広める価値のあるアイデア」をステージで共有しませんか？',
      link: '/join-us/speaker',
      color: '#eb0028'
    },
    {
      title: 'Join the Team',
      icon: <Users size={32} />,
      description: '運営、デザイン、広報など、共にイベントを創り上げる仲間を募集しています。',
      link: '/join-us/team',
      color: '#fff'
    },
    {
      title: 'Register as Audience',
      icon: <Ticket size={32} />,
      description: '最新情報を受け取り、次回のイベント参加チケットを予約しましょう。',
      link: '/join-us/audience',
      color: '#fff'
    }
  ];

  return (
    <section id="contact" className="join-us section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="join-tagline">Be part of the community</span>
          <h2 className="section-title">Join <span className="highlight-red">Us</span></h2>
          <p className="section-subtitle">
            TEDxWUSHS Youthは、情熱を持った全ての人の挑戦を待っています。
          </p>
        </motion.div>

        <div className="opportunities-grid">
          {opportunities.map((opt, index) => (
            <motion.div
              key={opt.title}
              className="opt-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="opt-icon">
                {opt.icon}
              </div>
              <h3 className="opt-title">{opt.title}</h3>
              <p className="opt-description">{opt.description}</p>
              <Link to={opt.link} className="opt-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="newsletter-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>イベントの最新情報や募集のお知らせをメールでお届けします。</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .join-us {
          background-color: var(--ted-black);
          position: relative;
        }

        .join-tagline {
          color: var(--ted-red);
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.75rem;
          margin-bottom: 1rem;
          display: block;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          color: #888;
          max-width: 600px;
          margin: 1.5rem auto 0;
          font-size: 1.1rem;
        }

        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        .opt-card {
          background: var(--ted-dark-gray);
          padding: 3rem 2rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          will-change: transform, opacity;
        }

        .opt-card:hover {
          transform: translateY(-10px) !important;
          border-color: var(--ted-red);
          background: linear-gradient(145deg, var(--ted-dark-gray), #000);
        }

        .opt-icon {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          color: var(--ted-white);
          transition: color 0.3s ease;
        }

        .opt-card:hover .opt-icon {
          color: var(--ted-red);
        }

        .opt-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .opt-description {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .opt-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--ted-red);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .newsletter-box {
          background: linear-gradient(135deg, #111, #000);
          border: 1px solid var(--ted-red);
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
        }

        .newsletter-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          color: #888;
          margin-bottom: 2.5rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
          background: #222;
          border: 1px solid #444;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          color: white;
          font-family: inherit;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--ted-red);
        }

        .btn-primary {
          background: var(--ted-red);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          text-transform: uppercase;
          transition: var(--transition-smooth);
        }

        .btn-primary:hover {
          background: #ff1a40;
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .opportunities-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .newsletter-box {
            padding: 2.5rem;
          }
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinUs;
