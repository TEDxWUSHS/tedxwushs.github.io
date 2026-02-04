import React from 'react';
import { motion } from 'framer-motion';

const speakers = [
  {
    name: "Coming Soon",
    role: "TEDxWUSHS Speaker",
    topic: "Revealing soon...",
    image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=TEDx"
  },
  {
    name: "Coming Soon",
    role: "TEDxWUSHS Speaker",
    topic: "Revealing soon...",
    image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=TEDx"
  },
  {
    name: "Coming Soon",
    role: "TEDxWUSHS Speaker",
    topic: "Revealing soon...",
    image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=TEDx"
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="speakers section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured <span className="highlight-red">Speakers</span></h2>
          <p className="section-subtitle">多様なバックグラウンドを持つスピーカーたちが、独自の視点でアイデアを共有します。</p>
        </motion.div>

        <div className="coming-soon">
          Coming Soon...
        </div>

        {/* 
                <div className="speakers-grid">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            className="speaker-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="speaker-image-container">
                                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                                <div className="speaker-overlay">
                                    <div className="speaker-topic">"{speaker.topic}"</div>
                                </div>
                            </div>
                            <div className="speaker-info">
                                <h3 className="speaker-name">{speaker.name}</h3>
                                <p className="speaker-role">{speaker.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
*/}
      </div>

      <style jsx>{`
        .speakers {
          background-color: var(--ted-black);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          color: #888;
          max-width: 600px;
          margin: 1rem auto 0;
        }

        .coming-soon {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-top: 2rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .speaker-card {
          background: var(--ted-dark-gray);
          border-radius: 12px;
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .speaker-image-container {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .speaker-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .speaker-card:hover .speaker-image {
          transform: scale(1.1);
        }

        .speaker-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(235, 0, 40, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .speaker-card:hover .speaker-overlay {
          opacity: 1;
        }

        .speaker-topic {
          color: white;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.4;
        }

        .speaker-info {
          padding: 1.5rem;
          text-align: center;
        }

        .speaker-name {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .speaker-role {
          color: var(--ted-red);
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
        }
      `}</style>
    </section>
  );
};

export default Speakers;
