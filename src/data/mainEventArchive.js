import speakerPamphlet from '../assets/main-event-2026/speaker-pamphlet.webp';
import timetablePamphlet from '../assets/main-event-2026/timetable-pamphlet.webp';
export { mainEventPhotos, mainEventCover } from './mainEventGallery';

export const mainEventOpeningMovie = {
  url: 'https://youtu.be/lkSY4hoaYSo',
  embedUrl: 'https://www.youtube-nocookie.com/embed/lkSY4hoaYSo?rel=0',
};

export const mainEventDocuments = [
  { id: 'speakers', preview: speakerPamphlet, href: '/archives/2026/speaker-pamphlet.pdf', title: { ja: '登壇者紹介（改訂版）', en: 'Speaker introductions (revised)' }, description: { ja: '登壇者のプロフィールとトーク紹介を掲載した配布資料です。7人目の紹介はタイムテーブル面に掲載されています。', en: 'Profiles and talk introductions from the event pamphlet. The seventh speaker is introduced on the timetable side.' } },
  { id: 'timetable', preview: timetablePamphlet, href: '/archives/2026/timetable-pamphlet.pdf', title: { ja: 'タイムテーブル・主催者挨拶', en: 'Timetable and organizer’s message' }, description: { ja: '当日のタイムテーブル、主催者挨拶、7人目の登壇者紹介、ご案内を掲載しています。', en: 'The event timetable, organizer’s message, seventh speaker introduction, and event guidelines.' } },
];
