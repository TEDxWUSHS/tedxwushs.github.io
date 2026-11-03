import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const AudienceClosedPage = () => {
  const { language } = useLanguage();
  const isJapanese = language === 'ja';
  return (
    <main id="main-content" tabIndex={-1} className="archive-page">
      <div className="container archive-heading">
        <p className="archive-eyebrow" lang="en">TEDxWUSHS Youth 2026</p>
        <h1>{isJapanese ? 'イベントは終了しました' : 'The event has concluded'}</h1>
        <p>{isJapanese ? 'ご参加・ご協力ありがとうございました。参加申込みの受付は終了しています。当日の写真と配布パンフレットをイベントアーカイブでご覧いただけます。' : 'Thank you to everyone who participated and supported us. Audience registration is closed. Explore photographs and the event pamphlet in Event Archives.'}</p>
        <Link className="btn btn-primary" to="/archives">Event Archives</Link>
      </div>
    </main>
  );
};

export default AudienceClosedPage;
