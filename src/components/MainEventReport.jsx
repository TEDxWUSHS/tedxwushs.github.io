import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { mainEventPhotos, mainEventDocuments } from '../data/mainEventArchive';
import './MainEventReport.css';

const MainEventReport = () => {
  const { language } = useLanguage();
  const ja = language === 'ja';
  return (
      <section id="event-gallery" className="main-event-report" aria-labelledby="main-event-gallery-title">
        <div className="container">
          <header className="main-event-report__heading">
            <p className="main-event-eyebrow" lang="en">04 / Scenes from the day</p>
            <h2 id="main-event-gallery-title" lang="en">Gallery</h2>
            <p>{ja ? 'ステージ、客席、トークのひとこまを写真でご紹介します。' : 'Scenes from the stage, audience, and talks.'}</p>
          </header>
          <div className="main-event-gallery">
            {mainEventPhotos.map(photo => (
              <figure key={photo.id}>
                <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.caption[language]} — ${ja ? '写真を別タブで開く' : 'Open photo in a new tab'}`}>
                  <img src={photo.src} width={photo.width} height={photo.height} alt={photo.caption[language]} loading="lazy" decoding="async" />
                </a>
                <figcaption>{photo.caption[language]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
  );
};

export const EventPamphlets = () => {
  const { language } = useLanguage();
  const ja = language === 'ja';
  return (
      <section id="event-pamphlets" className="main-event-report main-event-report--documents" aria-labelledby="main-event-pamphlets-title">
        <div className="container">
          <header className="main-event-report__heading">
            <p className="main-event-eyebrow" lang="en">From the event</p>
            <h2 id="main-event-pamphlets-title">{ja ? '当日配布パンフレット' : 'Event Pamphlet'}</h2>
            <p>{ja ? '登壇者の紹介と当日のプログラムを、配布資料のままご覧いただけます。' : 'Explore the speaker introductions and program as presented in the event pamphlet.'}</p>
          </header>
          <div className="main-event-documents">
            {mainEventDocuments.map(doc => (
              <article key={doc.id}>
                <img src={doc.preview} width="1095" height="775" alt={ja ? `${doc.title.ja}の紙面プレビュー` : `Preview of ${doc.title.en}`} loading="lazy" decoding="async" />
                <div>
                  <h3>{doc.title[language]}</h3>
                  <p>{doc.description[language]}</p>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer">{ja ? 'PDFを開く（別タブ）' : 'Open PDF (new tab)'} <ExternalLink size={16} aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default MainEventReport;
