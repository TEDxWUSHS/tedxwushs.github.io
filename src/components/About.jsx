import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What is <span className="highlight-red">TEDx</span>?</h2>
            <p className="english-text">
              In the spirit of discovering and spreading ideas, TED has created a program called <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener" className="highlight-link">TEDx</a>. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxWUSHS Youth, where x = independently organized TED event. At our TEDxWUSHS Youth event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. Speakers never pay to join a TEDx event. Consideration, speaker coaching and event participation along with attendance are all provided free of charge. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
            </p>
            <p className="japanese-text">
              TEDは「Ideas change everything.」という考えのもと、対話を生み、理解を深め、変化につながるアイデアを世界へ届けています。TEDxは、その精神を地域で実践する、独立運営のイベントです。
            </p>
          </motion.div>

          <motion.div
            className="about-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">TEDx<span className="highlight-red">WUSHS Youth</span></h2>
            <p>
              TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。
              若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。
              私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。
            </p>
            <p className="event-info">
              <strong>Date:</strong> October 31, 2026 (14:00 - 18:00 / Reception 13:30)<br />
              <strong>Venue:</strong> <a href="https://www.waseda.jp/school/shs/" target="_blank" rel="noopener" className="highlight-link">早稲田大学高等学院 講堂</a>, Nerima, Tokyo<br />
              <strong>Theme:</strong> Breakshot
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mission-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Theme</h3>
          <p className="mission-text">
            Breakshot
          </p>
          <div className="mission-description">
            <p>
              人生は予測不能なショットの連続である。<br />
              しかし、自分の軌道を決めるのは運ではない。
            </p>
            <p>
              工夫と情熱を込めたその一打が、閉ざされた未来を「無限の可能性」へと変える。<br />
              決断を恐れず、life-changingな最高のBreakshotを放て。
            </p>
            <p>
              今回は七人のスピーカーに、人生の「軌道」を変えたBreakshotについて語ってもらいます。<br />
              オーディエンスの皆さんの人生を変える機会となることを願っています。
            </p>
          </div>
        </motion.div>
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .about-item p {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .english-text {
          font-size: 0.95rem !important;
          color: #888 !important;
          font-style: italic;
        }

        .highlight-link {
          color: var(--ted-red);
          text-decoration: underline;
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
          text-transform: uppercase;
        }

        .mission-box {
          margin-top: 6rem;
          padding: 4rem;
          background: linear-gradient(135deg, var(--ted-red), #900);
          text-align: center;
          border-radius: 20px;
          position: relative;
          z-index: 1;
        }

        .mission-box h3 {
          font-size: 1.2rem;
          letter-spacing: 0.3em;
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }

        .mission-text {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 2rem;
        }

        .mission-description {
          max-width: 850px;
          margin: 0 auto;
        }

        .mission-description p {
          margin-bottom: 1.2rem;
          color: rgba(255, 255, 255, 0.92);
          font-size: 1.05rem;
          line-height: 2;
        }

        .mission-description p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .mission-text {
            font-size: 1.8rem;
          }
          .mission-box {
            padding: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
