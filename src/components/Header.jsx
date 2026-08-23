import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();
  const logoLinkRef = useRef(null);
  const desktopCurrentLinkRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const returnFocusOnClose = useRef(false);
  const focusDesktopAfterClose = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Organizers', href: '/organizers' },
    // { name: 'Team', href: '/team' },
    { name: 'Join Us', href: '/join-us' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isCurrentSection = (href) => (
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(`${href}/`)
  );

  useEffect(() => {
    returnFocusOnClose.current = false;
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const focusFrame = window.requestAnimationFrame(() => {
        firstMobileLinkRef.current?.focus();
      });

      return () => window.cancelAnimationFrame(focusFrame);
    }

    if (focusDesktopAfterClose.current) {
      focusDesktopAfterClose.current = false;
      (desktopCurrentLinkRef.current ?? logoLinkRef.current)?.focus();
    } else if (returnFocusOnClose.current) {
      returnFocusOnClose.current = false;
      toggleButtonRef.current?.focus();
    }

    return undefined;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 901px)');

    const closeMenuAtDesktopWidth = (event) => {
      if (!event.matches || !isMobileMenuOpen) return;

      const mobileNavigation = document.getElementById('mobile-navigation');
      const activeElement = document.activeElement;
      focusDesktopAfterClose.current = (
        mobileNavigation?.contains(activeElement)
        || toggleButtonRef.current === activeElement
      );
      returnFocusOnClose.current = false;
      setIsMobileMenuOpen(false);
    };

    closeMenuAtDesktopWidth(desktopMedia);
    desktopMedia.addEventListener('change', closeMenuAtDesktopWidth);
    return () => desktopMedia.removeEventListener('change', closeMenuAtDesktopWidth);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      returnFocusOnClose.current = true;
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) returnFocusOnClose.current = true;
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  const closeMobileMenuForNavigation = (href) => {
    returnFocusOnClose.current = location.pathname === href;
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        {language === 'ja' ? '本文へ移動' : 'Skip to main content'}
      </a>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link ref={logoLinkRef} to="/" className="logo-container">
          <img src={logoText} alt="TEDxWUSHS Youth" className="header-logo" />
        </Link>

        <div className="header-actions">
          <nav
            className="desktop-nav"
            aria-label={language === 'ja' ? 'メインナビゲーション' : 'Primary navigation'}
          >
            <ul lang="en">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    ref={isCurrentSection(item.href) ? desktopCurrentLinkRef : undefined}
                    className={isCurrentSection(item.href) ? 'active' : ''}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            ref={toggleButtonRef}
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen
              ? (language === 'ja' ? 'メニューを閉じる' : 'Close menu')
              : (language === 'ja' ? 'メニューを開く' : 'Open menu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen
              ? <X size={28} aria-hidden="true" />
              : <Menu size={28} aria-hidden="true" />}
          </button>

          <LanguageSwitcher />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label={language === 'ja' ? 'モバイルナビゲーション' : 'Mobile navigation'}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
          >
            <ul lang="en">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    onClick={() => closeMobileMenuForNavigation(item.href)}
                    className={isCurrentSection(item.href) ? 'active-mobile' : ''}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .skip-link {
          position: fixed;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 2000;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 0.65rem 1rem;
          border: 2px solid var(--ted-white);
          border-radius: 4px;
          background: var(--ted-red);
          color: var(--ted-white);
          font-weight: 700;
          transform: translateY(calc(-100% - 1rem));
        }

        .skip-link:focus {
          outline: 2px solid var(--ted-white);
          outline-offset: 2px;
          transform: translateY(0);
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          overflow-x: hidden;
          transition: var(--transition-smooth);
          will-change: background, padding;
        }

        @supports (overflow-x: clip) {
          .header {
            overflow-x: clip;
          }
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid rgb(var(--ted-red-rgb) / 0.2);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
        }

        .header-logo {
          display: block;
          max-width: 100%;
          height: 35px;
          object-fit: contain;
        }

        .logo-container {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          max-width: 100%;
          flex-shrink: 0;
        }

        .header-actions {
          --header-control-size: 46px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 0 0 auto;
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
          align-items: center;
          justify-content: center;
          width: var(--header-control-size);
          min-width: var(--header-control-size);
          height: var(--header-control-size);
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.42);
          color: var(--ted-white);
          line-height: 0;
        }

        .mobile-menu-btn svg {
          display: block;
        }

        .mobile-menu-btn:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 4px;
          border-radius: 999px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          max-width: 100%;
          background: var(--ted-black);
          max-height: calc(100vh - 92px);
          max-height: calc(100dvh - 92px);
          padding: 1rem 2rem 2rem;
          border-bottom: 1px solid var(--ted-red);
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: contain;
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .mobile-menu li {
          width: min(100%, 28rem);
        }

        .mobile-menu a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0.65rem 1rem;
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
            display: flex;
          }
          .header-content {
            gap: 0.5rem;
          }
          .logo-container {
            flex: 1 1 auto;
            min-width: 0;
          }
          .header-actions {
            --header-control-size: 44px;
            gap: 0.5rem;
          }
          .header-logo {
            width: clamp(105px, 34vw, 180px);
            max-width: 100%;
            height: auto;
          }
          .mobile-menu {
            padding-right: max(1.25rem, env(safe-area-inset-right));
            padding-left: max(1.25rem, env(safe-area-inset-left));
          }
        }

        @media (max-width: 360px) {
          .header-content,
          .header-actions {
            gap: 0.375rem;
          }
        }

        @media (min-width: 901px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skip-link,
          .header,
          .desktop-nav a,
          .mobile-menu a {
            scroll-behavior: auto;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      </header>
    </>
  );
};

export default Header;
