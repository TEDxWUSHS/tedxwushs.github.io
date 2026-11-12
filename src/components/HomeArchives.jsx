import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { mainEventCover } from '../data/mainEventArchive';
import './HomeArchives.css';

const HomeArchives = () => {
  const { language } = useLanguage();
  const ja = language === 'ja';
  return (
    <section className="home-archives section-padding" aria-labelledby="home-archives-title">
      <div className="container">
        <header>
          <p className="home-archives__eyebrow" lang="en">Thank you for being part of it</p>
          <h2 id="home-archives-title" lang="en">Event <span className="highlight-red">Archives</span></h2>
          <p>{ja ? 'TEDx WUSHS Youth 2026は無事に開催することができました。ご参加・ご協力いただいた皆さま、ありがとうございました。当日の記録をアーカイブでご覧ください。' : 'TEDx WUSHS Youth 2026 was successfully held. Thank you to everyone who participated and supported us. Revisit the day in our event archive.'}</p>
        </header>
        <div className="home-archives__grid">
          <Link to="/archives/2026/main-event" className="home-archives__main">
            <img src={mainEventCover.src} width={mainEventCover.width} height={mainEventCover.height} alt="" loading="lazy" decoding="async" />
            <div>
              <p className="home-archives__eyebrow" lang="en">2026 Main Event</p>
              <h3 lang="en">Breakshot</h3>
              <p>{ja ? 'オープニングムービー、登壇者とトーク、当日の写真、運営チーム。メインイベントの記録を一つにまとめました。' : 'The opening movie, speakers and talks, photographs, and organizing team—all in one main event archive.'}</p>
              <span>{ja ? '2026 メインイベントの記録を見る' : 'Explore the main event'} <ArrowRight size={20} aria-hidden="true" /></span>
            </div>
          </Link>
          <Link to="/archives" className="home-archives__all">
            <p className="home-archives__eyebrow" lang="en">Explore all events</p>
            <h3>{ja ? 'イベントアーカイブ一覧' : 'All Event Archives'}</h3>
            <p>{ja ? 'メインイベントと学院祭の英語ディベートなど、これまでの活動を振り返ります。' : 'Look back at our main event, school festival English debates, and past activities.'}</p>
            <span>{ja ? 'すべてのアーカイブを見る' : 'Browse all archives'} <ArrowRight size={20} aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomeArchives;
