import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { eventSchedule } from '../data/event';
import { mainEventCover, mainEventOpeningMovie } from '../data/mainEventArchive';
import { mainEventSpeakers } from '../data/mainEventSpeakers';
import { organizers } from '../data/organizers';
import MainEventReport, { EventPamphlets } from '../components/MainEventReport';
import './MainEventArchive.css';

const chapters = [
  ['event-introduction', 'Introduction', { ja: '開催年・テーマ、このアーカイブの紹介と代表写真', en: 'Event year, theme, introduction to the archive, and cover photo' }],
  ['event-overview', 'Overview', { ja: '開催概要、オープニングムービー、当日のタイムテーブル、配布パンフレット', en: 'Event details, opening movie, timetable, and the event pamphlet' }],
  ['event-speakers', 'Speakers', { ja: '登壇者7名の紹介ビジュアルとプロフィール', en: 'Introduction posters and profiles of our seven speakers' }],
  ['event-talks', 'Talks', { ja: 'プログラム順に読む講演タイトル・使用言語・トーク紹介', en: 'Talk titles, languages, and introductions in program order' }],
  ['event-gallery', 'Gallery', { ja: '登壇中のステージ、客席、会場のロゴなど当日の写真', en: 'Photographs of talks, the audience, and the TEDx letters' }],
  ['event-team', 'Team', { ja: '2026年の運営メンバーと担当、ご協力いただいた皆さまへのリンク', en: 'The 2026 organizing team, their roles, and acknowledgements' }],
];

const MainEventArchivePage = () => {
  const { language } = useLanguage();
  const ja = language === 'ja';
  const facts = ja ? [
    ['開催日', '2026年10月31日（土）'], ['会場', '早稲田大学高等学院 講堂'],
    ['プログラム', '7名のトーク、ワークショップ・交流会'], ['言語', '日本語・英語'],
  ] : [
    ['Date', 'October 31, 2026'], ['Venue', 'Waseda University Senior High School Auditorium'],
    ['Program', 'Seven talks, workshop and networking'], ['Languages', 'Japanese and English'],
  ];
  return (
    <main id="main-content" tabIndex={-1} className="main-event-page">
      <header id="event-introduction" className="main-event-introduction container">
        <div>
          <Link className="main-event-back" to="/archives">← Event Archives</Link>
          <p className="main-event-eyebrow" lang="en">2026 / TEDxWUSHS Youth</p>
          <h1 lang="en">Breakshot<span>Event Archive</span></h1>
          <p>{ja ? '2026年10月31日、早稲田大学高等学院 講堂で開催した「Breakshot」。当日の写真、配布パンフレット、登壇者とプログラムをまとめたイベントアーカイブです。' : 'An event archive of “Breakshot,” held at Waseda University Senior High School Auditorium on October 31, 2026, featuring photographs, the event pamphlet, speakers, and program.'}</p>
        </div>
        <figure>
          <img src={mainEventCover.src} width={mainEventCover.width} height={mainEventCover.height} alt={mainEventCover.caption[language]} decoding="async" />
          <figcaption>{mainEventCover.caption[language]}</figcaption>
        </figure>
      </header>

      <nav className="main-event-toc container" aria-labelledby="event-contents-title">
        <h2 id="event-contents-title">{ja ? '目次' : 'Contents'}</h2>
        <ol start="0">{chapters.map(([id, title, description], index) => (
          <li key={id}><a href={`#${id}`}><span aria-hidden="true">0{index}</span><span className="main-event-toc__text"><strong lang="en">{title}</strong><small>{description[language]}</small></span></a></li>
        ))}</ol>
      </nav>

      <section id="event-overview" className="main-event-chapter container" aria-labelledby="event-overview-title">
        <span id="event-report" className="main-event-anchor" />
        <p className="main-event-eyebrow" lang="en">01 / The event</p>
        <h2 id="event-overview-title" lang="en">Overview</h2>
        <p className="main-event-lead">{ja ? '早稲田大学高等学院の生徒が企画・運営したTEDxイベントです。さまざまな経験を持つ登壇者が「Breakshot」をテーマにアイデアを共有しました。ご来場いただいた皆さま、登壇者の皆さま、開催にご協力いただいたすべての方々に感謝申し上げます。' : 'An independently organized TEDx event led by students of Waseda University Senior High School. Speakers with diverse experiences shared ideas around “Breakshot.” Our sincere thanks to everyone who attended, spoke, and helped make the event possible.'}</p>
        <dl className="main-event-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <section className="main-event-movie" aria-labelledby="event-opening-movie-title">
          <h3 id="event-opening-movie-title">{ja ? 'オープニングムービー' : 'Opening Movie'}</h3>
          <p>{ja ? '当日のオープニングムービーをご覧いただけます。' : 'Watch the opening movie from the event.'}</p>
          <iframe
            src={mainEventOpeningMovie.embedUrl}
            title={ja ? 'TEDxWUSHS Youth 2026 オープニングムービー' : 'TEDxWUSHS Youth 2026 Opening Movie'}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <a href={mainEventOpeningMovie.url} target="_blank" rel="noopener noreferrer">{ja ? 'YouTubeで見る（別タブ）' : 'Watch on YouTube (new tab)'} ↗</a>
        </section>
        <details id="event-schedule" className="main-event-schedule">
          <summary>{ja ? '当日のタイムテーブルを見る' : 'View the event timetable'}</summary>
          <p>{ja ? '当日のプログラムとして案内したタイムテーブルです。' : 'The timetable published for the event.'}</p>
          <ol>{eventSchedule.map(item => <li key={item.time}><time>{item.time}</time><div><strong lang="en">{item.event}</strong><p>{item.description[language]}</p></div></li>)}</ol>
        </details>
        <EventPamphlets />
      </section>

      <section id="event-speakers" className="main-event-chapter container" aria-labelledby="event-speakers-title">
        <p className="main-event-eyebrow" lang="en">02 / People behind the ideas</p>
        <h2 id="event-speakers-title" lang="en">Speakers</h2>
        <p className="main-event-lead">{ja ? '2026年の登壇者7名を、登壇者紹介ビジュアルとともにご紹介します。' : 'Meet our seven 2026 speakers through their original introduction posters.'}</p>
        <div className="main-event-speakers">{mainEventSpeakers.map(speaker => (
          <article key={speaker.id}>
            <img src={speaker.poster} width="864" height="1080" alt={ja ? `${speaker.name.ja}の登壇者紹介ビジュアル（日本語）` : `Original Japanese speaker introduction poster for ${speaker.name.en}`} loading="lazy" decoding="async" />
            <div><h3>{speaker.name[language]}</h3><p className="main-event-role">{speaker.role[language]}</p><p>{speaker.shortBio[language]}</p>
              <Link to={`/speakers#speaker-${speaker.id}`}>{ja ? 'プロフィールの詳細' : 'Full profile'} →</Link>
              <a href={`#talk-${speaker.id}`}>{ja ? 'トーク紹介へ' : 'About the talk'} ↓</a>
            </div>
          </article>
        ))}</div>
      </section>

      <section id="event-talks" className="main-event-chapter container" aria-labelledby="event-talks-title">
        <p className="main-event-eyebrow" lang="en">03 / Seven perspectives</p>
        <h2 id="event-talks-title" lang="en">Talks</h2>
        <p className="main-event-lead">{ja ? '当日のプログラム順に、7つのトークの題名と紹介を掲載しています。' : 'Titles and introductions for the seven talks, in program order.'}</p>
        <ol className="main-event-talks">{mainEventSpeakers.map((speaker, index) => (
          <li id={`talk-${speaker.id}`} key={speaker.id}>
            <span className="main-event-talk-number" aria-hidden="true">0{index + 1}</span>
            <article><p className="main-event-eyebrow">{speaker.name[language]} / {speaker.talk.language[language]}</p><h3>{speaker.talk.title[language]}</h3><p>{speaker.talk.description[language]}</p></article>
          </li>
        ))}</ol>
      </section>

      <MainEventReport />

      <section id="event-team" className="main-event-chapter container" aria-labelledby="event-team-title">
        <p className="main-event-eyebrow" lang="en">05 / Behind the scenes</p>
        <h2 id="event-team-title" lang="en">Team</h2>
        <p className="main-event-lead">{ja ? 'TEDxWUSHS Youth 2026を企画・運営したチームメンバーです。' : 'The team who planned and organized TEDxWUSHS Youth 2026.'}</p>
        <ul className="main-event-team">{organizers.map(member => <li key={member.id}><h3 lang="en">{member.name}</h3><p>{member.grade[language]}</p><p>{member.role[language]}</p></li>)}</ul>
        <div className="main-event-footer-links"><Link to="/team">{ja ? '2026年チームの紹介' : 'Meet the 2026 team'} →</Link><Link to="/acknowledgements">{ja ? '謝礼・ご協力いただいた皆さま' : 'Acknowledgements'} →</Link><Link to="/archives">← Event Archives</Link></div>
      </section>
    </main>
  );
};
export default MainEventArchivePage;
