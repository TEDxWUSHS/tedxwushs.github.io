import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SpeakersPage from './pages/SpeakersPage';
import TeamPage from './pages/TeamPage';
import JoinUsPage from './pages/JoinUsPage';
import SpeakerRecruitment from './pages/SpeakerRecruitment';
import TeamRecruitment from './pages/TeamRecruitment';
import AudienceRegistration from './pages/AudienceRegistration';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          {/* <Route path="/team" element={<TeamPage />} /> */}
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/join-us/speaker" element={<SpeakerRecruitment />} />
          <Route path="/join-us/team" element={<TeamRecruitment />} />
          <Route path="/join-us/audience" element={<AudienceRegistration />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
