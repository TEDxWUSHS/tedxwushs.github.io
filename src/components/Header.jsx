import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoText from '../assets/logo_red.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    // { name: 'Team', href: '/team' },
    { name: 'Join Us', href: '/join-us' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo-container">
          <img src={logoText} alt="TEDxWUSHS Youth" className="header-logo" />
        </Link>

        <div className="header-actions">
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={location.pathname === item.href ? 'active' : ''}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher />

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen
              ? (language === 'ja' ? 'メニューを閉じる' : 'Close menu')
              : (language === 'ja' ? 'メニューを開く' : 'Open menu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={location.pathname === item.href ? 'active-mobile' : ''}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
          will-change: background, padding;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(235, 0, 40, 0.2);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-logo {
          height: 35px;
          object-fit: contain;
        }

        .logo-container {
          flex-shrink: 0;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          min-width: 0;
        }

        .desktop-nav ul {
          display: flex;
          gap: clamp(1.25rem, 2.4vw, 2.5rem);
        }

        .desktop-nav a {
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .desktop-nav a:hover, .desktop-nav a.active {
          color: var(--ted-red);
          opacity: 1;
        }

        .mobile-menu-btn {
          display: none;
          color: var(--ted-white);
        }

        .mobile-menu-btn:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 4px;
          border-radius: 2px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--ted-black);
          padding: 2rem;
          border-bottom: 1px solid var(--ted-red);
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        .mobile-menu a {
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .mobile-menu a.active-mobile {
          color: var(--ted-red);
          opacity: 1;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .header-actions {
            gap: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .header-logo {
            height: 28px;
          }
          .header-actions {
            gap: 0.5rem;
          }
        }

        @media (max-width: 360px) {
          .header-logo {
            height: 23px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
