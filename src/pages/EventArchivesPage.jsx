import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import festivalImage from '../assets/updates/school-fest-2026-booth.jpg';
import poster from '../assets/poster.png';

const EventArchivesPage = () => {
  const { language } = useLanguage();
  const isJapanese = language === 'ja';
  const events = [
    {
      title: isJapanese ? '学院祭 — 英語ディベート' : 'Gakuinsai — English Debate',
      description: isJapanese ? '学院祭での英語ディベートと会場の様子をご紹介します。' : 'Explore our English debates and scenes from the school festival.',
      image: festivalImage,
      href: '/archives/2026/school-fest',
      status: isJapanese ? '開催レポート' : 'Event report',
    },
    {
      title: 'TEDxWUSHS Youth — Breakshot',
      description: isJapanese ? 'メインイベントは終了しました。ご参加・ご協力ありがとうございました。当日の報告は近日公開予定です。開催概要、登壇者、当日のプログラムをご覧いただけます。' : 'Our main event has concluded. Thank you to everyone who participated and supported us. The event report is coming soon; explore the event details, speakers, and program in the meantime.',
      image: poster,
      href: '/archives/2026/main-event',
      status: isJapanese ? '当日の報告：近日公開' : 'Event report coming soon',
    },
  ];
  return (
    <main id="main-content" tabIndex={-1} className="archive-page">
      <div className="container">
        <header className="archive-heading">
          <p className="archive-eyebrow" lang="en">Our past events</p>
          <h1 lang="en">Event <span className="highlight-red">Archives</span></h1>
          <p>{isJapanese ? 'これまでのイベントと、そこで生まれたアイデアを振り返ります。' : 'Look back at our events and the ideas they brought together.'}</p>
        </header>
        <section aria-labelledby="archive-2026-heading">
          <h2 id="archive-2026-heading" className="archive-year">2026</h2>
          <div className="archive-grid">
            {events.map((event) => (
              <article className="archive-card" key={event.href}>
                <img src={event.image} alt="" loading="lazy" />
                <div className="archive-card__body">
                  <p className="archive-eyebrow">{event.status}</p>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <Link to={event.href}>{isJapanese ? '記録を見る' : 'Explore the archive'} <ArrowRight size={18} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventArchivesPage;
