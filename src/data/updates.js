import gakuinsaiImage from '../assets/updates/gakuinsai.png';
import { audienceRegistrationUrl } from './registration';

export const siteUpdates = [
  {
    id: 'school-fest-2026-feature',
    publishedAt: '2026-10-12',
    category: 'Feature',
    href: '/school-fest-2026',
    copy: {
      ja: {
        title: '学院祭英語ディベート特集を公開しました',
        summary: '学院祭で実施した3校との英語ディベートを、対戦記録、TEDxがディベートを行う理由、今回の工夫と課題の3章で紹介します。',
        action: '特集記事を読む',
      },
      en: {
        title: 'Gakuinsai English Debate feature published',
        summary: 'Read about our three interschool English debates, why debate matters to TEDx, and what we learned from the format.',
        action: 'Read the feature',
      },
    },
  },
  {
    id: 'waseda-shs-official-announcement',
    publishedAt: '2026-10-09',
    category: 'Announcement',
    href: 'https://www.waseda.jp/school/shs/news/2026/10/09/11248/',
    external: true,
    copy: {
      ja: {
        title: '高等学院公式サイトに開催案内が掲載されました',
        summary: '早稲田大学高等学院の公式サイトで、10月31日（土）開催のTEDxWUSHS Youth 2026「Breakshot」が紹介されました。',
        action: '高等学院の掲載記事を読む',
      },
      en: {
        title: 'Event announcement published by Waseda University Senior High School',
        summary: 'Waseda University Senior High School has published an official announcement for TEDxWUSHS Youth 2026 “Breakshot,” taking place on Saturday, October 31.',
        action: 'Read the official announcement',
      },
    },
  },
  {
    id: 'audience-registration-open',
    publishedAt: '2026-10-01',
    category: 'Registration',
    href: audienceRegistrationUrl,
    external: true,
    copy: {
      ja: {
        title: 'オーディエンス募集を開始しました',
        summary: 'TEDxWUSHS Youth 2026のオーディエンス募集を開始しました。対象は早稲田大学高等学院の生徒及びその保護者です。',
        action: '参加を申し込む',
      },
      en: {
        title: 'Audience registration is now open',
        summary: 'Audience registration for TEDxWUSHS Youth 2026 is now open to students of Waseda University Senior High School and their parents or guardians.',
        action: 'Apply to attend',
      },
    },
  },
  {
    id: 'gakuinsai-2026-program',
    publishedAt: '2026-09-30',
    category: 'Event',
    href: gakuinsaiImage,
    external: true,
    image: gakuinsaiImage,
    imageAlt: {
      ja: 'TEDxWUSHS Youth学院祭企画「English Debate」のポスター',
      en: 'Poster for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026',
    },
    copy: {
      ja: {
        title: '学院祭で英語ディベート企画を実施します',
        summary: '10月10日（土）・11日（日）、学院祭のゼミ室2でTEDxWUSHS Youthの団体紹介を行います。頌栄女子学院高等学校・慶應義塾高等学校・早稲田大学本庄高等学院ESSと、社会奉仕・所得税・友情と恋愛を論題に英語で議論します。',
        action: 'ポスターを拡大して見る',
      },
      en: {
        title: 'English debates at Gakuinsai 2026',
        summary: 'On October 10 and 11 in Seminar Room 2, we will introduce TEDxWUSHS Youth and hold philosophical English debates with Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS on community service, income tax, and friendship versus romantic relationships.',
        action: 'View the full poster',
      },
    },
  },
  {
    id: 'official-note-launched',
    publishedAt: '2026-09-30',
    category: 'note',
    href: 'https://note.com/tedx_wushs_youth/n/n01e4f29a9fca',
    external: true,
    copy: {
      ja: {
        title: '公式noteを更新しました',
        summary: '公式noteで「TEDxWUSHS Youth 公式note始めました！」を公開しました。今後、活動やイベントに関する情報を発信していきます。',
        action: 'noteの記事を読む',
      },
      en: {
        title: 'Official note updated',
        summary: 'We published “TEDxWUSHS Youth 公式note始めました！” and will share more updates about our activities and the event.',
        action: 'Read on note',
      },
    },
  },
  {
    id: 'full-speaker-lineup-announced',
    publishedAt: '2026-09-29',
    category: 'Speakers',
    href: '/speakers',
    copy: {
      ja: {
        title: '全登壇者のプロフィールを公開しました',
        summary: 'TEDxWUSHS Youth 2026に登壇する全7名のスピーカー情報を公開しました。',
        action: '全登壇者を見る',
      },
      en: {
        title: 'Full speaker lineup announced',
        summary: 'Profiles for all seven TEDxWUSHS Youth 2026 speakers are now available.',
        action: 'View the full lineup',
      },
    },
  },
  {
    id: 'speaker-information-update',
    publishedAt: '2026-09-27',
    category: 'Speakers',
    href: '/speakers',
    copy: {
      ja: {
        title: 'スピーカー情報を更新しました',
        summary: 'TEDxWUSHS Youth 2026に登壇するスピーカーのプロフィールと講演情報を更新しました。',
        action: 'スピーカー情報を見る',
      },
      en: {
        title: 'Speaker information updated',
        summary: 'We have updated the profiles and talk information for the TEDxWUSHS Youth 2026 speakers.',
        action: 'View speakers',
      },
    },
  },
];
