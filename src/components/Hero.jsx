import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import poster from '../assets/poster.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            TEDx Waseda University Senior High School Youth
          </motion.span>
          <h1 className="hero-title">
            Ideas Worth <br /> <span className="highlight-red">Spreading</span>
          </h1>
          <p className="hero-description">
            早稲田大学高等学院で開催される、次世代の若者たちによるTEDxイベント。
            常識を打ち破り、新しい価値観を創造する場所。
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-primary">Discover More</Link>
            <Link to="/join-us" className="btn btn-outline">Join Us</Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="poster-container">
            <img src={poster} alt="TEDxWUSHS Youth Poster" className="hero-poster" />
            <div className="poster-glow"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          background: radial-gradient(circle at 10% 20%, rgba(235, 0, 40, 0.05) 0%, transparent 50%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-tagline {
          color: var(--ted-red);
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 2rem;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #aaa;
          max-width: 500px;
          margin-bottom: 3rem;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 4px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .btn-primary {
          background-color: var(--ted-red);
          color: var(--ted-white);
        }

        .btn-primary:hover {
          background-color: #ff1a40;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(235, 0, 40, 0.3);
        }

        .btn-outline {
          border: 2px solid var(--ted-white);
          color: var(--ted-white);
        }

        .btn-outline:hover {
          background: var(--ted-white);
          color: var(--ted-black);
          transform: translateY(-5px);
        }

        .poster-container {
          position: relative;
        }

        .hero-poster {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
        }

        .poster-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--ted-red);
          filter: blur(80px);
          opacity: 0.2;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-description {
            margin: 0 auto 3rem;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
            order: -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
