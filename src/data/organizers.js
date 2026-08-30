export const organizerSourceUrl = 'https://www.ted.com/tedx/events/68350';

const gradeLabels = {
  year2: { ja: '2年生', en: 'Year 2' },
  year3: { ja: '3年生', en: 'Year 3' },
  faculty: { ja: '教員', en: 'Faculty' },
};

// Keep names and English role labels aligned with the official TED event page.
export const organizers = [
  {
    id: 'haruki-kawamata',
    name: 'Haruki KAWAMATA',
    grade: gradeLabels.year3,
    role: {
      ja: 'オーガナイザー',
      en: 'Organizer',
    },
  },
  {
    id: 'takuya-saeki',
    name: 'Takuya Saeki',
    grade: gradeLabels.faculty,
    role: {
      ja: '共同オーガナイザー',
      en: 'Co-organizer',
    },
  },
  {
    id: 'hironori-sakai',
    name: 'Hironori SAKAI',
    grade: gradeLabels.year2,
    role: {
      ja: '運営・スピーカーチーム',
      en: 'Operation/Speaker Team',
    },
  },
  {
    id: 'tatsuaki-matsuda',
    name: 'Tatsuaki Matsuda',
    grade: gradeLabels.year3,
    role: {
      ja: '運営・スピーカーチーム',
      en: 'Operation/Speaker Team',
    },
  },
  {
    id: 'yasuhiro-nanjo',
    name: 'Yasuhiro Nanjo',
    grade: gradeLabels.year2,
    role: {
      ja: 'テクノロジー・広報',
      en: 'Technology/Marketing',
    },
  },
  {
    id: 'lyu-noguchi',
    name: 'Lyu Noguchi',
    grade: gradeLabels.year3,
    role: {
      ja: 'スピーカーチーム',
      en: 'Speaker Team',
    },
  },
  {
    id: 'yunosuke-sato',
    name: 'Yunosuke Sato',
    grade: gradeLabels.year3,
    role: {
      ja: '財務',
      en: 'Finance',
    },
  },
  {
    id: 'taisei-moriwaki',
    name: 'Taisei Moriwaki',
    grade: gradeLabels.year3,
    role: {
      ja: '広報',
      en: 'Marketing',
    },
  },
  {
    id: 'keisuke-horikoshi',
    name: 'Keisuke Horikoshi',
    grade: gradeLabels.year2,
    role: {
      ja: '監査',
      en: 'Audit',
    },
  },
];
