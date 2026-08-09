import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
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
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
