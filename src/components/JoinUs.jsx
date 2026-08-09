import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Ticket, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const opportunities = [
    {
      title: 'Join the Team',
      icon: <Users size={32} />,
      description: '2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトとSNSでお知らせします。',
      link: '/join-us/team',
      action: '募集状況を見る',
      status: 'Recruitment Closed',
      closed: true,
      color: '#fff'
    },
    {
      title: 'Register as Audience',
      icon: <Ticket size={32} />,
      description: '対象は早稲田大学高等学院の生徒及びその保護者です。参加申込みは2026年9月開始予定です。',
      link: '/join-us/audience',
      action: '対象・申込情報を見る',
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
            TEDxWUSHS Youthへの参加方法と最新情報をご案内します。
          </p>
        </motion.div>

        <motion.div
          className="recruitment-closed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <strong>2026 Applications Update</strong>
          <p>2026年開催分のスピーカー募集及び運営チーム募集は終了しました。たくさんのご応募ありがとうございました。</p>
        </motion.div>

        <div className="opportunities-grid">
          {opportunities.map((opt, index) => (
            <motion.div
              key={opt.title}
              className={`opt-card${opt.closed ? ' opt-card--closed' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="opt-icon">
                {opt.icon}
              </div>
              {opt.status && <span className="opt-status">{opt.status}</span>}
              <h3 className="opt-title">{opt.title}</h3>
              <p className="opt-description">{opt.description}</p>
              <Link to={opt.link} className="opt-link">
                {opt.action} <ArrowRight size={16} />
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

            <iframe
              title="hidden_iframe"
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: 'none' }}
            ></iframe>

            <div style={{ display: isSubmitted ? 'block' : 'none' }} className="success-message">
              <p>登録完了しました<br />イベントの最新情報をお届けしますのでお楽しみに。</p>
            </div>

            <div style={{ display: isSubmitted ? 'none' : 'block' }}>
              <p>イベントの最新情報や募集のお知らせをメールでお届けします。</p>
              <form
                className="newsletter-form"
                action="https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse"
                method="post"
                target="hidden_iframe"
                onSubmit={() => {
                  setTimeout(() => setIsSubmitted(true), 300);
                }}
              >
                <input
                  type="email"
                  name="entry.269866944"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail size={30} aria-hidden="true" />
          <div>
            <span>Questions about the event?</span>
            <h3>お問い合わせ</h3>
            <p>参加方法や当日の運営についてのご質問は、イベント事務局までご連絡ください。</p>
            <a href="mailto:tedxwushs@gmail.com">tedxwushs@gmail.com</a>
          </div>
        </motion.div>
      </div>

      <style>{`
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

        .recruitment-closed {
          max-width: 820px;
          margin: -2rem auto 4rem;
          padding: 1.5rem 2rem;
          border: 1px solid rgba(235, 0, 40, 0.45);
          border-radius: 12px;
          background: rgba(235, 0, 40, 0.08);
          text-align: center;
        }

        .recruitment-closed strong {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--ted-red);
          font-family: var(--font-heading);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .recruitment-closed p {
          color: #bbb;
        }

        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
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

        .opt-card--closed {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .opt-status {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 0.35rem 0.7rem;
          border: 1px solid rgba(235, 0, 40, 0.55);
          border-radius: 999px;
          color: var(--ted-red);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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

        .success-message {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ted-red);
          border-radius: 8px;
          padding: 2rem;
          margin-top: 1.5rem;
          color: white;
          font-weight: 500;
          line-height: 1.6;
        }

        .contact-box {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.5rem;
          align-items: start;
          margin-top: 3rem;
          padding: 2rem;
          border-radius: 16px;
          background: var(--ted-dark-gray);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-box > svg {
          color: var(--ted-red);
        }

        .contact-box span {
          color: #777;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-box h3 {
          margin: 0.25rem 0 0.6rem;
          font-size: 1.5rem;
        }

        .contact-box p {
          margin-bottom: 0.7rem;
          color: #aaa;
        }

        .contact-box a {
          color: var(--ted-red);
          font-weight: 700;
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
          .contact-box {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-box > svg {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default JoinUs;
