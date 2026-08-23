import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SpeakersPage from './pages/SpeakersPage';
import JoinUsPage from './pages/JoinUsPage';
import SpeakerRecruitment from './pages/SpeakerRecruitment';
import TeamRecruitment from './pages/TeamRecruitment';
import AudienceRegistration from './pages/AudienceRegistration';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

const pageTitles = {
  ja: {
    '/': 'TEDxWUSHS Youth | Ideas change everything',
    '/about': 'TEDxについて | TEDxWUSHS Youth',
    '/speakers': 'スピーカー | TEDxWUSHS Youth',
    '/join-us': '参加する | TEDxWUSHS Youth',
    '/join-us/speaker': 'スピーカー募集 | TEDxWUSHS Youth',
    '/join-us/team': '運営チーム募集 | TEDxWUSHS Youth',
    '/join-us/audience': '参加申込み | TEDxWUSHS Youth',
    '/faq': 'よくある質問 | TEDxWUSHS Youth',
  },
  en: {
    '/': 'TEDxWUSHS Youth | Ideas change everything',
    '/about': 'About | TEDxWUSHS Youth',
    '/speakers': 'Speakers | TEDxWUSHS Youth',
    '/join-us': 'Join Us | TEDxWUSHS Youth',
    '/join-us/speaker': 'Speaker Applications | TEDxWUSHS Youth',
    '/join-us/team': 'Team Recruitment | TEDxWUSHS Youth',
    '/join-us/audience': 'Audience Registration | TEDxWUSHS Youth',
    '/faq': 'Frequently Asked Questions | TEDxWUSHS Youth',
  },
};

const RouteAccessibility = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const titles = pageTitles[language] ?? pageTitles.ja;
    document.title = titles[pathname] ?? (
      language === 'ja'
        ? 'ページが見つかりません | TEDxWUSHS Youth'
        : 'Page Not Found | TEDxWUSHS Youth'
    );
    document.documentElement.lang = language === 'en' ? 'en' : 'ja';
  }, [language, pathname]);

  useEffect(() => {
    const main = document.getElementById('main-content');
    const routeChanged = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (!main) return undefined;

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (!routeChanged) return undefined;

    const focusFrame = window.requestAnimationFrame(() => {
      main.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <RouteAccessibility />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/join-us/speaker" element={<SpeakerRecruitment />} />
            <Route path="/join-us/team" element={<TeamRecruitment />} />
            <Route path="/join-us/audience" element={<AudienceRegistration />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
