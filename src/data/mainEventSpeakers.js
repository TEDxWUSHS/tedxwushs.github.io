import takezawa from '../assets/main-event-2026/speakers/takezawa-mamoru.webp';
import hasegawa from '../assets/main-event-2026/speakers/hasegawa-keisuke.webp';
import horise from '../assets/main-event-2026/speakers/horise-yoshito.webp';
import enomoto from '../assets/main-event-2026/speakers/enomoto-takayuki.webp';
import kuroki from '../assets/main-event-2026/speakers/kuroki-yuto.webp';
import kogure from '../assets/main-event-2026/speakers/kogure-masahisa.webp';
import hiruma from '../assets/main-event-2026/speakers/reon-hiruma.webp';
import { speakers } from './speakers';

// Program order differs from the announcement numbers on the original posters.
const eventOrder = [
  ['takezawa-mamoru', takezawa], ['hasegawa-keisuke', hasegawa],
  ['horise-yoshito', horise], ['enomoto-takayuki', enomoto],
  ['kuroki-yuto', kuroki], ['kogure-masahisa', kogure], ['reon-hiruma', hiruma],
];
export const mainEventSpeakers = eventOrder.map(([id, poster]) => ({
  ...speakers.find(speaker => speaker.id === id), poster,
}));
