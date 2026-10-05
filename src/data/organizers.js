export const organizerSourceUrl = 'https://www.ted.com/tedx/events/68350';

const gradeLabels = {
  year2: { ja: '2年生', en: 'Year 2' },
  year3: { ja: '3年生', en: 'Year 3' },
  faculty: { ja: '教員', en: 'Faculty' },
};

// Names are based on the official TED event page. Role labels also include
// the current internal assignments provided by the TEDxWUSHS Youth team.
export const organizers = [
  {
    id: 'haruki-kawamata',
    name: 'Haruki Kawamata',
    grade: gradeLabels.year3,
    role: {
      ja: 'ボードメンバー・オーガナイザー',
      en: 'Board Member / Organizer',
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
    name: 'Hironori Sakai',
    grade: gradeLabels.year2,
    role: {
      ja: 'ボードメンバー・運営・スピーカーチーム',
      en: 'Board Member / Operation / Speaker Team',
    },
  },
  {
    id: 'tatsuaki-matsuda',
    name: 'Tatsuaki Matsuda',
    grade: gradeLabels.year3,
    role: {
      ja: 'ボードメンバー・テクノロジー・運営・スピーカーチーム',
      en: 'Board Member / Technology / Operation / Speaker Team',
    },
  },
  {
    id: 'yasuhiro-nanjo',
    name: 'Yasuhiro Nanjo',
    grade: gradeLabels.year2,
    role: {
      ja: 'テクノロジー・広報・運営・マネジメント',
      en: 'Technology / Marketing / Operation / Management',
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
      ja: 'マネジメント・財務',
      en: 'Management / Finance',
    },
  },
  {
    id: 'taisei-moriwaki',
    name: 'Taisei Moriwaki',
    grade: gradeLabels.year3,
    role: {
      ja: '広報・運営',
      en: 'Marketing / Operation',
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
