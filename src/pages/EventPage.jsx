import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { audienceRegistrationUrl } from '../data/registration';
import { eventSchedule } from '../data/event';
import { speakers } from '../data/speakers';

const contentByLanguage = {
  ja: {
    intro: '開催概要、登壇者、当日のタイムテーブルを一つのページにまとめました。',
    themeLabel: 'Program theme',
    themeDescription: '予測できない変化を前に、常識の枠を越えて新しい方向を切り拓くアイデアを共有します。',
    detailsLabel: 'プログラム概要',
    details: [
      { label: '開催日', value: '2026年10月31日（土）' },
      { label: '時間', value: '受付開始 13:30／開催 14:00〜18:00' },
      { label: '会場', value: '早稲田大学高等学院 講堂' },
      { label: '参加対象', value: '早稲田大学高等学院の生徒及びその保護者' },
      { label: '参加費', value: '無料' },
      { label: '言語', value: '日本語・英語（スライド字幕対応予定）' },
    ],
    applyAction: '参加を申し込む',
    applyNote: 'Googleフォームが新しいタブで開きます。',
    scheduleAction: 'タイムテーブルを見る',
    speakerTitle: 'Speaker Lineup',
    speakerDescription: 'TEDxWUSHS Youth 2026に登壇する7名です。詳しい紹介文はSpeakersページでご覧いただけます。',
    speakerAction: 'スピーカー詳細を見る',
    scheduleTitle: 'Program Schedule',
    scheduleDescription: '当日の進行予定です。時間は前後する可能性があります。',
    scheduleLabel: 'TEDxWUSHS Youth 2026 当日タイムテーブル',
  },
  en: {
    intro: 'Find the program essentials, speaker lineup, and full schedule in one place.',
    themeLabel: 'Program theme',
    themeDescription: 'Ideas that break beyond familiar boundaries and open new directions in an unpredictable world.',
    detailsLabel: 'Program details',
    details: [
      { label: 'Date', value: 'Saturday, October 31, 2026' },
      { label: 'Time', value: 'Doors open 1:30 PM / Program 2:00–6:00 PM' },
      { label: 'Venue', value: 'Waseda University Senior High School Auditorium' },
      { label: 'Audience', value: 'Students of Waseda University Senior High School and their parents or guardians' },
      { label: 'Admission', value: 'Free' },
      { label: 'Languages', value: 'Japanese and English, with slide subtitles planned' },
    ],
    applyAction: 'Apply to attend',
    applyNote: 'The Google Form opens in a new tab.',
    scheduleAction: 'View the schedule',
    speakerTitle: 'Speaker Lineup',
    speakerDescription: 'Meet the seven speakers joining TEDxWUSHS Youth 2026. Full profiles are available on the Speakers page.',
    speakerAction: 'View speaker profiles',
    scheduleTitle: 'Program Schedule',
    scheduleDescription: 'The program is subject to minor timing changes.',
    scheduleLabel: 'TEDxWUSHS Youth 2026 program schedule',
  },
};

const ProgramPage = () => {
  const { language } = useLanguage();
  const copy = contentByLanguage[language] ?? contentByLanguage.ja;
  const publishedSpeakers = [...speakers]
    .filter((speaker) => speaker.published)
    .sort((first, second) => first.displayOrder - second.displayOrder);

  return (
    <main id="main-content" tabIndex={-1} className="event-page">
      <section className="event-hero" aria-labelledby="event-page-title">
        <div className="container">
          <div className="event-hero__layout">
            <header className="event-hero__header">
              <p className="event-eyebrow" lang="en">TEDxWUSHS Youth 2026</p>
              <h1 id="event-page-title" className="event-hero__title" lang="en">
                Program <span>Information</span>
              </h1>
              <p className="event-hero__intro">{copy.intro}</p>
              <div className="event-hero__actions">
                <a
                  className="event-button event-button--primary"
                  href={audienceRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.applyAction} — ${copy.applyNote}`}
                >
                  {copy.applyAction}
                  <ExternalLink size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <a className="event-button event-button--secondary" href="#event-schedule">
                  {copy.scheduleAction}
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
              <p className="event-hero__note">{copy.applyNote}</p>
            </header>

            <aside className="event-theme" aria-labelledby="event-theme-heading">
              <p id="event-theme-heading" className="event-theme__label" lang="en">{copy.themeLabel}</p>
              <p className="event-theme__name" lang="en">Breakshot</p>
              <p className="event-theme__description">{copy.themeDescription}</p>
              <p className="event-theme__statement" lang="en">Ideas change everything.</p>
            </aside>
          </div>

          <dl className="event-facts" aria-label={copy.detailsLabel}>
            {copy.details.map((detail) => (
              <div className="event-facts__item" key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="event-section event-speakers" aria-labelledby="event-speakers-title">
        <div className="container">
          <header className="event-section__header">
            <p className="event-eyebrow" lang="en">Meet the speakers</p>
            <h2 id="event-speakers-title" lang="en">{copy.speakerTitle}</h2>
            <p>{copy.speakerDescription}</p>
          </header>

          <ul className="event-speakers__list">
            {publishedSpeakers.map((speaker) => (
              <li className="event-speaker" key={speaker.id}>
                <img
                  src={speaker.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ '--event-speaker-position': speaker.imagePosition }}
                />
                <div>
                  <h3>{speaker.name[language] ?? speaker.name.ja}</h3>
                  <p>{speaker.role[language] ?? speaker.role.ja}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link className="event-text-link" to="/speakers">
            {copy.speakerAction}
            <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="event-schedule" className="event-section event-schedule" aria-labelledby="event-schedule-title">
        <div className="container">
          <header className="event-section__header">
            <p className="event-eyebrow" lang="en">October 31, 2026</p>
            <h2 id="event-schedule-title" lang="en">{copy.scheduleTitle}</h2>
            <p>{copy.scheduleDescription}</p>
          </header>

          <ol className="event-schedule__list" aria-label={copy.scheduleLabel}>
            {eventSchedule.map((item) => (
              <li className="event-schedule__item" key={`${item.time}-${item.event}`}>
                <time>{language === 'en' && item.timeEn ? item.timeEn : item.time}</time>
                <div>
                  <h3 lang="en">{item.event}</h3>
                  <p>{item.description[language] ?? item.description.ja}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <style>{`
        .event-page {
          background: var(--ted-black);
          color: var(--ted-white);
        }

        .event-hero {
          padding: 10rem 0 5rem;
          background:
            linear-gradient(120deg, rgb(var(--ted-red-rgb) / 0.13), transparent 36rem),
            var(--ted-black);
        }

        .event-hero__layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
          gap: 3rem;
          align-items: end;
        }

        .event-eyebrow {
          margin-bottom: 0.8rem;
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .event-hero__title {
          max-width: 12ch;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.94;
          text-transform: uppercase;
        }

        .event-hero__title span {
          color: var(--ted-red);
        }

        .event-hero__intro {
          max-width: 54ch;
          margin-top: 1.5rem;
          color: #b8b8b8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .event-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .event-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-height: 48px;
          padding: 0.85rem 1.2rem;
          border-radius: 4px;
          font-weight: 800;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .event-button--primary {
          background: var(--ted-red);
          color: var(--ted-white);
        }

        .event-button--primary:hover {
          background: #c90022;
        }

        .event-button--secondary {
          border: 1px solid rgba(255, 255, 255, 0.38);
          color: var(--ted-white);
        }

        .event-button--secondary:hover {
          border-color: var(--ted-white);
          background: rgba(255, 255, 255, 0.08);
        }

        .event-button:focus-visible,
        .event-text-link:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 4px;
        }

        .event-hero__note {
          margin-top: 0.75rem;
          color: #8f8f8f;
          font-size: 0.85rem;
        }

        .event-theme {
          padding: 2rem 0 0 2rem;
          border-left: 3px solid var(--ted-red);
        }

        .event-theme__label {
          color: #969696;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .event-theme__name {
          margin-top: 0.35rem;
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .event-theme__description {
          margin-top: 1.25rem;
          color: #aaa;
          line-height: 1.75;
        }

        .event-theme__statement {
          margin-top: 1.25rem;
          color: var(--ted-red);
          font-weight: 800;
        }

        .event-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 4.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .event-facts__item {
          padding: 1.4rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-facts__item:not(:nth-child(3n + 1)) {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-facts__item:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .event-facts dt {
          color: var(--ted-white);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .event-facts dd {
          margin-top: 0.45rem;
          color: #aaa;
          line-height: 1.65;
        }

        .event-section {
          padding: 5rem 0;
        }

        .event-section__header {
          margin-bottom: 2.5rem;
          text-align: left;
        }

        .event-section__header h2 {
          max-width: 20ch;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 1;
          text-transform: uppercase;
        }

        .event-section__header > p:last-child {
          max-width: 62ch;
          margin-top: 1rem;
          color: #aaa;
          line-height: 1.75;
        }

        .event-speakers {
          background: #0b0b0b;
        }

        .event-speakers__list {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 2rem;
        }

        .event-speaker {
          min-width: 0;
        }

        .event-speaker img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: var(--event-speaker-position, 50% 50%);
          border-radius: min(1vw, 10px);
          outline: 1px solid rgba(255, 255, 255, 0.1);
          outline-offset: -1px;
        }

        .event-speaker div {
          padding-top: 1rem;
        }

        .event-speaker h3 {
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          letter-spacing: 0;
          line-height: 1.25;
          text-transform: none;
        }

        .event-speaker p {
          margin-top: 0.35rem;
          color: #999;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .event-text-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          min-height: 48px;
          margin-top: 2.5rem;
          color: var(--ted-red);
          font-weight: 800;
        }

        .event-text-link:hover {
          color: var(--ted-white);
        }

        .event-schedule {
          background: var(--ted-dark-gray);
          scroll-margin-top: 96px;
        }

        .event-schedule__list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .event-schedule__item {
          display: grid;
          grid-template-columns: minmax(130px, 0.25fr) minmax(0, 1fr);
          gap: 2rem;
          align-items: baseline;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-schedule__item time {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
        }

        .event-schedule__item > div {
          display: grid;
          grid-template-columns: minmax(170px, 0.4fr) minmax(0, 1fr);
          gap: 1.5rem;
          align-items: baseline;
        }

        .event-schedule__item h3 {
          font-size: 1rem;
          letter-spacing: 0;
          text-transform: none;
        }

        .event-schedule__item p {
          color: #aaa;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .event-hero__layout {
            grid-template-columns: 1fr;
          }

          .event-theme {
            max-width: 620px;
          }

          .event-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .event-facts__item,
          .event-facts__item:nth-last-child(-n + 3) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .event-facts__item:not(:nth-child(3n + 1)) {
            border-left: 0;
          }

          .event-facts__item:nth-child(even) {
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }

          .event-facts__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .event-speakers__list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .event-hero {
            padding: 8rem 0 4rem;
          }

          .event-hero__title {
            font-size: clamp(2.7rem, 15vw, 4.25rem);
          }

          .event-hero__actions {
            align-items: stretch;
            flex-direction: column;
          }

          .event-button {
            width: 100%;
          }

          .event-theme {
            padding: 1.5rem 0 0 1.25rem;
          }

          .event-facts {
            grid-template-columns: 1fr;
            margin-top: 3.5rem;
          }

          .event-facts__item,
          .event-facts__item:nth-last-child(-n + 2) {
            padding: 1.2rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .event-facts__item:nth-child(even) {
            border-left: 0;
          }

          .event-facts__item:last-child {
            border-bottom: 0;
          }

          .event-section {
            padding: 4rem 0;
          }

          .event-speakers__list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem 1rem;
          }

          .event-schedule__item {
            grid-template-columns: 1fr;
            gap: 0.3rem;
            padding: 1.1rem 0;
          }

          .event-schedule__item > div {
            grid-template-columns: minmax(130px, 0.45fr) minmax(0, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 400px) {
          .event-speakers__list {
            grid-template-columns: 1fr;
          }

          .event-speaker {
            display: grid;
            grid-template-columns: 112px minmax(0, 1fr);
            gap: 1rem;
            align-items: center;
          }

          .event-speaker div {
            padding-top: 0;
          }

          .event-schedule__item > div {
            grid-template-columns: 1fr;
            gap: 0.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .event-button {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
};

export default ProgramPage;
