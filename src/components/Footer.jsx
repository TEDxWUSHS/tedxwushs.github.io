import { Link } from 'react-router-dom';
import logoRed from '../assets/logo_red.png';
import { Instagram, Twitter, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/">
              <img src={logoRed} alt="TEDxWUSHS" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              {/* <li><Link to="/team">Our Team</Link></li> */}
              <li><a href="https://www.waseda.jp/school/shs/" target="_blank" rel="noopener">Waseda SHS</a></li>
              <li><a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener">TEDx Program</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/tedxwushs/" target="_blank" rel="noopener" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="https://x.com/TEDxWUSHS" target="_blank" rel="noopener" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
              <a href="mailto:tedxwushs@gmail.com" aria-label="Email"><Mail size={24} /></a>
            </div>
            <p className="footer-handle">@TEDxWUSHS</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TEDxWUSHS Youth. All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--ted-black);
          padding: 5rem 0 3rem;
          border-top: 1px solid var(--ted-dark-gray);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
        }

        .footer-logo {
          height: 60px;
          margin-bottom: 1.5rem;
        }

        .footer-tagline {
          color: #666;
          font-size: 0.9rem;
          max-width: 300px;
        }

        .footer-links h4, .footer-social h4 {
          margin-bottom: 2rem;
          font-size: 1rem;
          color: var(--ted-red);
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          color: #aaa;
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: var(--ted-white);
          padding-left: 5px;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .social-icons a {
          color: var(--ted-white);
          transition: var(--transition-smooth);
        }

        .social-icons a:hover {
          color: var(--ted-red);
          transform: translateY(-3px);
        }

        .footer-handle {
          font-weight: 700;
          color: var(--ted-red);
          letter-spacing: 0.1em;
        }

        .footer-bottom {
          padding-top: 3rem;
          border-top: 1px solid var(--ted-dark-gray);
          text-align: center;
          color: #555;
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .footer-brand, .footer-social {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-tagline {
            margin: 0 auto;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
