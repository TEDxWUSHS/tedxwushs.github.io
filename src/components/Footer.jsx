import { Link } from 'react-router-dom';
import logoRed from '../assets/logo_red.png';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" lang="en">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="footer-brand-link" to="/">
              <img src={logoRed} alt="TEDxWUSHS Youth" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          <nav className="footer-links" aria-labelledby="footer-quick-links-heading">
            <h4 id="footer-quick-links-heading">Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/organizers">Organizers</Link></li>
              {/* <li><Link to="/team">Our Team</Link></li> */}
              <li><a href="https://www.waseda.jp/school/shs/" target="_blank" rel="noopener noreferrer">Waseda SHS</a></li>
              <li><a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener noreferrer">TEDx Program</a></li>
            </ul>
          </nav>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/tedxwushs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} aria-hidden="true" /></a>
              <a href="https://x.com/TEDxWUSHS" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><Twitter size={24} aria-hidden="true" /></a>
              {/* <a href="#" aria-label="YouTube"><Youtube size={24} /></a> */}
              <a href="mailto:tedxwushs@gmail.com" aria-label="Email"><Mail size={24} aria-hidden="true" /></a>
            </div>
            <p className="footer-handle">@TEDxWUSHS</p>
            <a className="footer-email" href="mailto:tedxwushs@gmail.com">tedxwushs@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TEDxWUSHS Youth. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
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
          grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1.5fr);
          gap: 4rem;
        }

        .footer-brand,
        .footer-links,
        .footer-social {
          min-width: 0;
        }

        .footer-brand-link {
          display: inline-flex;
          max-width: 100%;
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }

        .footer-logo {
          display: block;
          width: min(375px, 100%);
          max-width: 100%;
          height: auto;
        }

        .footer-tagline {
          color: #aaa;
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
          display: inline-block;
          color: #aaa;
          font-size: 0.95rem;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--ted-white);
          transform: translateX(5px);
        }

        .social-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .social-icons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          min-width: 44px;
          height: 44px;
          color: var(--ted-white);
          border-radius: 4px;
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

        .footer-email {
          display: inline-block;
          max-width: 100%;
          margin-top: 0.5rem;
          color: #aaa;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .footer-email:hover {
          color: var(--ted-white);
        }

        .footer-bottom {
          padding-top: 3rem;
          border-top: 1px solid var(--ted-dark-gray);
          text-align: center;
          color: #aaa;
          font-size: 0.85rem;
        }

        .footer-brand-link:focus-visible,
        .footer-links a:focus-visible,
        .social-icons a:focus-visible,
        .footer-email:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 4px;
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
          .footer-links ul {
            align-items: center;
          }
          .footer-tagline {
            margin: 0 auto;
          }
          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 400px) {
          .footer {
            padding: 3.5rem 0 2rem;
          }

          .footer-content {
            gap: 3rem;
          }

          .footer-top {
            gap: 2.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-links a,
          .social-icons a {
            transition: none;
          }

          .footer-links a:hover,
          .social-icons a:hover {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
