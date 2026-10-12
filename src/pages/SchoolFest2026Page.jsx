import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import leafletImage from '../assets/updates/gakuinsai.png';
import boothImage from '../assets/updates/school-fest-2026-booth.jpg';
import { useLanguage } from '../i18n/LanguageContext';

const contentByLanguage = {
  ja: {
    eyebrow: 'Gakuinsai 2026 / Feature',
    title: '学院祭で英語ディベートを開催',
    lead: 'TEDxWUSHS Youthは学院祭期間中、頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院の3校を招き、社会や日常に関わる問いを英語で議論しました。競技として勝敗を決めながら、アイデアを問い直し、より深く理解する場を目指した企画です。',
    meta: '2026年10月10日・11日／早稲田大学高等学院 ゼミ室2',
    boothAlt: '学院祭のTEDxWUSHS Youth展示会場。黒板のロゴとBreakshotを表現したビリヤード台が設置されている。',
    boothCaption: '雄弁部と共同で使用したゼミ室2の展示会場。ビリヤード台は、TEDxWUSHS Youth 2026のテーマ「Breakshot」を表現しています。',
    contentsLabel: 'この記事の内容',
    chapters: [
      { number: '01', href: '#overview', title: '学院祭で英語ディベートを開催', description: '開催概要・対戦校・試合結果' },
      { number: '02', href: '#about-tedx', title: 'TED/TEDxとは', description: 'TEDの使命と、地域からアイデアを広めるTEDx' },
      { number: '03', href: '#why-debate', title: 'TED/TEDxがディベートを行う理由', description: 'Debateの理念と、今回の工夫' },
    ],
    overview: {
      number: '01',
      eyebrow: 'Event report',
      title: '学院祭で英語ディベートを開催',
      intro: '10月10日と11日の2日間、TEDxWUSHS Youthは雄弁部と共同でゼミ室2を使用し、団体紹介と哲学的英語ディベートを実施しました。頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院ESSを迎え、3つの論題について議論しました。',
      detailsLabel: '開催概要',
      details: [
        { term: '開催日', description: '2026年10月10日（土）・11日（日）' },
        { term: '会場', description: '早稲田大学高等学院 ゼミ室2' },
        { term: '実施内容', description: '団体紹介・哲学的英語ディベート' },
        { term: '共同展示', description: '早稲田大学高等学院 雄弁部' },
      ],
      matchesLabel: '対戦記録',
      dateLabel: '日時',
      opponentLabel: '対戦校',
      motionLabel: '論題',
      positionLabel: '両校の立場',
      resultLabel: '結果',
      leafletAlt: 'TEDxWUSHS Youth学院祭企画「English Debate」の案内チラシ',
      leafletCaption: '学院祭で配布・掲示したEnglish Debateの案内チラシ。',
    },
    aboutTedx: {
      number: '02',
      eyebrow: 'TED and TEDx',
      title: 'TED/TEDxとは',
      intro: 'TEDとは、1984年にアメリカで始まったカンファレンスに端を発する非営利組織です。最初のカンファレンスは、カリフォルニア州モントレーで開催されました。',
      acronymLead: 'TEDという名称は、次の3つの言葉に由来します。',
      acronym: [
        { initial: 'T', term: 'Technology', translation: 'テクノロジー' },
        { initial: 'E', term: 'Entertainment', translation: 'エンターテインメント' },
        { initial: 'D', term: 'Design', translation: 'デザイン' },
      ],
      body: '技術・エンターテインメント・デザインという3領域を結び付ける場として始まり、現在では分野を越えて、世界をより深く理解するきっかけとなるアイデアを届けています。',
      tedxBody: 'TEDxは、TEDの精神を地域のコミュニティへ届けるための草の根の取り組みです。TEDから付与された無償ライセンスのもと、各地域のチームが独立して企画・運営し、その地域から生まれるアイデアや対話を広げます。TEDxWUSHS Youthも、その一つです。',
      quote: 'Ideas change everything.',
      quoteTranslation: 'アイデアは世界を変える',
      dialogueTitle: 'アイデアが、対話と変化につながるまで',
      dialogue: [
        'ここで重要なのは、TEDが優れた知識や面白いアイデアを一方的に発信することだけを目指しているわけではないという点です。',
        'スピーカーが届けたアイデアをきっかけに、オーディエンス層に応じてスピーカー/オーディエンスの間に深い交流と対話が生まれる。そして、そのアイデアが実際のオーディエンスのアクションにつながっていく。TEDが重視するのは、そうしたアイデアの可能性です。',
      ],
      watchTitle: '実際のTED/TEDxを見てみる',
      watchIntro: 'まだイメージが湧かない方は、実際のTED TalkとTEDx Talkをご覧ください。',
      watchOnYouTube: 'YouTubeで見る',
      videos: [
        {
          label: 'TED Talk / 日本語字幕',
          title: 'ジュリアン・トレジャー：人を惹きつける話し方',
          embedUrl: 'https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0',
          youtubeUrl: 'https://www.youtube.com/watch?v=eIho2S0ZahI',
        },
        {
          label: 'TEDxSapporo',
          title: '思うは招く｜植松 努',
          embedUrl: 'https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0',
          youtubeUrl: 'https://www.youtube.com/watch?v=gBumdOWWMhY',
        },
      ],
    },
    whyDebate: {
      number: '03',
      eyebrow: 'Debate and dialogue',
      title: 'TED/TEDxがディベートを行う理由',
      intro: 'ここで、今回の英語ディベート企画とTEDの関係に戻りましょう。TEDは公式のCuration Guidelinesで、「Debate（討論）」を価値の一つとして明確に掲げています。',
      body: 'TEDの精神の中にあるDebateは、一般的な競技英語ディベートのように、勝敗や最終的な結論だけを求めるものではありません。TEDは懐疑的な視点や批判的な検討を歓迎し、それらをアイデアの改善や、見落としていた課題の発見につなげます。同時に、相互尊重を前提とし、差別やヘイトスピーチを認めていません。今回の企画でも、ディベート参加者をアイデアを届ける話者として捉えると同時に、オーディエンスの立場を踏まえたうえでの議論を意識し、扱うアイデアに深みを与えることを重視しました。そして、特にDebateの中でも質問時間を設け、オーディエンスを取り込んだ議論にすることができました。また、異なる前提から議論が始まり、主張が十分に噛み合わない場面もありましたが、それ含めオーディエンスに新しい発見をもたらすことができ有意義な会になったと思います。',
      practiceTitle: '今回の工夫',
      practices: [
        '立論と反論は英語で行い、論点を言葉にして明確にする。',
        '試合中に質問時間を設け、状況に応じて日本語での質問も受け付ける。',
      ],
    },
    programAction: 'TEDxWUSHS Youth 2026のプログラムを見る',
    references: {
      eyebrow: 'Sources',
      title: '参考資料',
      description: 'TED/TEDxおよびDebateに関する記述は、以下のTED公式資料を参照しています。',
      items: [
        { title: 'TED — About', description: 'TEDの使命と活動について', href: 'https://www.ted.com/about' },
        { title: 'History of TED', description: '1984年の創設とカンファレンスの歩みについて', href: 'https://www.ted.com/about/our-organization/history-of-ted' },
        { title: 'TED Conferences', description: 'Technology・Entertainment・Designという名称の由来について', href: 'https://www.ted.com/about/conferences' },
        { title: 'TEDx Program', description: 'TEDxの仕組みと地域コミュニティでの役割について', href: 'https://www.ted.com/tedx' },
        { title: 'TED’s Curation Guidelines', description: 'Debate、相互尊重、ヘイトスピーチに関する方針', href: 'https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines' },
      ],
    },
  },
  en: {
    eyebrow: 'Gakuinsai 2026 / Feature',
    title: 'English debates at Gakuinsai 2026',
    lead: 'During Gakuinsai, TEDxWUSHS Youth welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School for English debates on questions connected to society and everyday life. The event kept the competitive format while creating space to re-examine ideas and understand them more deeply.',
    meta: 'October 10–11, 2026 / Seminar Room 2, Waseda University Senior High School',
    boothAlt: 'The TEDxWUSHS Youth exhibition at Gakuinsai, with a logo on the blackboard and a billiards table representing Breakshot.',
    boothCaption: 'The exhibition space shared with the school debate club. The billiards table represented “Breakshot,” the theme of TEDxWUSHS Youth 2026.',
    contentsLabel: 'In this feature',
    chapters: [
      { number: '01', href: '#overview', title: 'English debates at Gakuinsai', description: 'Event details, participating schools, and results' },
      { number: '02', href: '#about-tedx', title: 'What are TED and TEDx?', description: 'TED’s mission and how TEDx carries ideas into local communities' },
      { number: '03', href: '#why-debate', title: 'Why TED/TEDx engages in debate', description: 'The idea of Debate and what we tried' },
    ],
    overview: {
      number: '01',
      eyebrow: 'Event report',
      title: 'English debates at Gakuinsai',
      intro: 'On October 10 and 11, TEDxWUSHS Youth shared Seminar Room 2 with the school debate club for an introduction to our activities and three philosophical English debates. We welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS.',
      detailsLabel: 'Event details',
      details: [
        { term: 'Dates', description: 'Saturday, October 10 and Sunday, October 11, 2026' },
        { term: 'Venue', description: 'Seminar Room 2, Waseda University Senior High School' },
        { term: 'Program', description: 'Organization showcase and philosophical English debates' },
        { term: 'Shared with', description: 'Waseda University Senior High School Debate Club' },
      ],
      matchesLabel: 'Debate record',
      dateLabel: 'Date and time',
      opponentLabel: 'Opponent',
      motionLabel: 'Motion',
      positionLabel: 'Positions',
      resultLabel: 'Result',
      leafletAlt: 'Flyer for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026',
      leafletCaption: 'The English Debate flyer displayed and distributed at Gakuinsai.',
    },
    aboutTedx: {
      number: '02',
      eyebrow: 'TED and TEDx',
      title: 'What are TED and TEDx?',
      intro: 'TED is a nonprofit organization that traces its roots to a conference first held in the United States in 1984. The first conference took place in Monterey, California.',
      acronymLead: 'The name TED comes from three words:',
      acronym: [
        { initial: 'T', term: 'Technology', translation: 'Technology' },
        { initial: 'E', term: 'Entertainment', translation: 'Entertainment' },
        { initial: 'D', term: 'Design', translation: 'Design' },
      ],
      body: 'TED began by bringing together technology, entertainment, and design. Today, its work reaches across disciplines to share ideas that help people understand the world more deeply.',
      tedxBody: 'TEDx is a grassroots initiative that brings the spirit of TED to local communities. Under a free license granted by TED, local teams independently organize events that uncover ideas and create conversation in their communities. TEDxWUSHS Youth is one of those independently organized events.',
      quote: 'Ideas change everything.',
      quoteTranslation: 'アイデアは世界を変える',
      dialogueTitle: 'From an idea to dialogue and change',
      dialogue: [
        'What matters is that TED is not simply about broadcasting excellent knowledge or interesting ideas in one direction.',
        'An idea shared by a speaker can create deep exchange and dialogue between speakers and audience members in ways that reflect the audience’s background. The idea can then lead to real action by the audience. TED places value on this wider potential of ideas.',
      ],
      watchTitle: 'Watch TED and TEDx in action',
      watchIntro: 'If the distinction still feels abstract, these TED and TEDx Talks offer two concrete examples.',
      watchOnYouTube: 'Watch on YouTube',
      videos: [
        {
          label: 'TED Talk / Japanese subtitles',
          title: 'How to speak so that people want to listen | Julian Treasure',
          embedUrl: 'https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0',
          youtubeUrl: 'https://www.youtube.com/watch?v=eIho2S0ZahI',
        },
        {
          label: 'TEDxSapporo',
          title: 'Hope invites | Tsutomu Uematsu',
          embedUrl: 'https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0',
          youtubeUrl: 'https://www.youtube.com/watch?v=gBumdOWWMhY',
        },
      ],
    },
    whyDebate: {
      number: '03',
      eyebrow: 'Debate and dialogue',
      title: 'Why TED/TEDx engages in debate',
      intro: 'Returning to the relationship between this English debate project and TED, TED explicitly identifies “Debate” as one of its values in its official Curation Guidelines.',
      body: 'Debate within the spirit of TED differs from conventional competitive English debate focused only on a winner or a final conclusion. TED welcomes skepticism and critical examination as ways to improve an idea or reveal its flaws, while requiring mutual respect and rejecting bigotry and hate speech. In this project, we treated each participant as a speaker carrying an idea while also shaping the discussion around the audience’s perspective, so that the ideas being examined could gain greater depth. In particular, we included question time to bring the audience directly into the discussion. At times, arguments began from different assumptions and did not fully meet; even those moments offered the audience new discoveries and helped make the event meaningful.',
      practiceTitle: 'What we tried',
      practices: [
        'Cases and rebuttals were delivered in English to make each line of reasoning explicit.',
        'Question time was built into the matches, with Japanese questions accepted when appropriate.',
      ],
    },
    programAction: 'View the TEDxWUSHS Youth 2026 program',
    references: {
      eyebrow: 'Sources',
      title: 'References',
      description: 'Our descriptions of TED, TEDx, and Debate draw on the following official TED sources.',
      items: [
        { title: 'TED — About', description: 'TED’s mission and work', href: 'https://www.ted.com/about' },
        { title: 'History of TED', description: 'TED’s origins in 1984 and the history of its conference', href: 'https://www.ted.com/about/our-organization/history-of-ted' },
        { title: 'TED Conferences', description: 'The origin of the name Technology, Entertainment, and Design', href: 'https://www.ted.com/about/conferences' },
        { title: 'TEDx Program', description: 'How TEDx works in local communities', href: 'https://www.ted.com/tedx' },
        { title: 'TED’s Curation Guidelines', description: 'Guidance on debate, mutual respect, and hate speech', href: 'https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines' },
      ],
    },
  },
};

const matches = [
  {
    date: { ja: '10月10日（土）12:00–13:00', en: 'Saturday, October 10 / 12:00–1:00 PM' },
    opponent: { ja: '頌栄女子学院高等学校', en: 'Shoei Girls’ Senior High School' },
    motionJa: '日本はボランティア（社会奉仕）活動を高校卒業の要件とするべきである。',
    motionEn: 'Japan should make community service a requirement for high school graduation.',
    positions: [
      {
        school: { ja: '頌栄女子学院高等学校', en: 'Shoei Girls’ Senior High School' },
        stance: { ja: 'ボランティア活動の必修化に肯定', en: 'Supports requiring volunteer service for graduation' },
      },
      {
        school: { ja: '早稲田大学高等学院', en: 'Waseda University Senior High School' },
        stance: { ja: 'ボランティア活動の必修化に否定', en: 'Opposes requiring volunteer service for graduation' },
      },
    ],
    result: { ja: '頌栄女子学院高等学校の勝利', en: 'Shoei Girls’ Senior High School won' },
  },
  {
    date: { ja: '10月11日（日）11:30–12:30', en: 'Sunday, October 11 / 11:30 AM–12:30 PM' },
    opponent: { ja: '慶應義塾高等学校', en: 'Keio Senior High School' },
    motionJa: '日本は高所得者に対する所得税を引き上げるべきである。',
    motionEn: 'Japan should significantly increase income taxes on high-income earners.',
    positions: [
      {
        school: { ja: '慶應義塾高等学校', en: 'Keio Senior High School' },
        stance: { ja: '高所得者への所得税引き上げに賛成', en: 'Supports raising income taxes on high-income earners' },
      },
      {
        school: { ja: '早稲田大学高等学院', en: 'Waseda University Senior High School' },
        stance: { ja: '高所得者への所得税引き上げに反対', en: 'Opposes raising income taxes on high-income earners' },
      },
    ],
    result: { ja: '慶應義塾高等学校の勝利', en: 'Keio Senior High School won' },
  },
  {
    date: { ja: '10月11日（日）14:00–15:00', en: 'Sunday, October 11 / 2:00–3:00 PM' },
    opponent: { ja: '早稲田大学本庄高等学院 ESS', en: 'Waseda University Honjo Senior High School ESS' },
    motionJa: '恋愛より友情を優先すべきである。',
    motionEn: 'This House believes that friendship is more important than romantic relationships.',
    positions: [
      {
        school: { ja: '早稲田大学本庄高等学院 ESS', en: 'Waseda University Honjo Senior High School ESS' },
        stance: { ja: '恋愛関係を重視する立場', en: 'Prioritizes romantic relationships' },
      },
      {
        school: { ja: '早稲田大学高等学院', en: 'Waseda University Senior High School' },
        stance: { ja: '友情を重視する立場', en: 'Prioritizes friendship' },
      },
    ],
    result: { ja: '早稲田大学高等学院の勝利', en: 'Waseda University Senior High School won' },
  },
];

const SchoolFest2026Page = () => {
  const { language } = useLanguage();
  const copy = contentByLanguage[language] ?? contentByLanguage.ja;

  return (
    <main id="main-content" tabIndex={-1} className="school-fest-page">
      <article>
        <header className="school-fest-hero">
          <div className="container school-fest-hero__layout">
            <div className="school-fest-hero__copy">
              <p className="school-fest-eyebrow" lang="en">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p className="school-fest-hero__lead">{copy.lead}</p>
              <p className="school-fest-hero__meta">{copy.meta}</p>
            </div>

            <figure className="school-fest-hero__media">
              <img src={boothImage} alt={copy.boothAlt} />
              <figcaption>{copy.boothCaption}</figcaption>
            </figure>
          </div>
        </header>

        <nav className="school-fest-contents" aria-label={copy.contentsLabel}>
          <div className="container">
            <p className="school-fest-contents__label">{copy.contentsLabel}</p>
            <ol>
              {copy.chapters.map((chapter) => (
                <li key={chapter.number}>
                  <a href={chapter.href}>
                    <span className="school-fest-contents__number" aria-hidden="true">{chapter.number}</span>
                    <span>
                      <strong>{chapter.title}</strong>
                      <small>{chapter.description}</small>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <section id="overview" className="school-fest-section school-fest-section--light" aria-labelledby="overview-title">
          <div className="container">
            <header className="school-fest-section__header">
              <span className="school-fest-section__number" aria-hidden="true">{copy.overview.number}</span>
              <div>
                <p className="school-fest-eyebrow" lang="en">{copy.overview.eyebrow}</p>
                <h2 id="overview-title">{copy.overview.title}</h2>
                <p>{copy.overview.intro}</p>
              </div>
            </header>

            <dl className="school-fest-facts" aria-label={copy.overview.detailsLabel}>
              {copy.overview.details.map((detail) => (
                <div key={detail.term}>
                  <dt>{detail.term}</dt>
                  <dd>{detail.description}</dd>
                </div>
              ))}
            </dl>

            <div className="school-fest-overview__layout">
              <div>
                <h3 className="school-fest-subheading">{copy.overview.matchesLabel}</h3>
                <ol className="school-fest-matches">
                  {matches.map((match, index) => (
                    <li key={match.motionEn}>
                      <span className="school-fest-match__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <div className="school-fest-match__body">
                        <dl>
                          <div>
                            <dt>{copy.overview.dateLabel}</dt>
                            <dd>{match.date[language] ?? match.date.ja}</dd>
                          </div>
                          <div>
                            <dt>{copy.overview.opponentLabel}</dt>
                            <dd>{match.opponent[language] ?? match.opponent.ja}</dd>
                          </div>
                        </dl>
                        <div className="school-fest-match__motion">
                          <span>{copy.overview.motionLabel}</span>
                          <p>{language === 'en' ? match.motionEn : match.motionJa}</p>
                          <p lang={language === 'en' ? 'ja' : 'en'}>
                            {language === 'en' ? match.motionJa : match.motionEn}
                          </p>
                        </div>
                        <div className="school-fest-match__positions">
                          <span>{copy.overview.positionLabel}</span>
                          <dl>
                            {match.positions.map((position) => (
                              <div key={position.school.en}>
                                <dt>{position.school[language] ?? position.school.ja}</dt>
                                <dd>{position.stance[language] ?? position.stance.ja}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                        <p className="school-fest-match__result">
                          <span>{copy.overview.resultLabel}</span>
                          {match.result[language] ?? match.result.ja}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <figure className="school-fest-leaflet">
                <img src={leafletImage} alt={copy.overview.leafletAlt} loading="lazy" decoding="async" />
                <figcaption>{copy.overview.leafletCaption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="about-tedx" className="school-fest-section school-fest-section--dark" aria-labelledby="about-tedx-title">
          <div className="container school-fest-rationale">
            <header className="school-fest-section__header">
              <span className="school-fest-section__number" aria-hidden="true">{copy.aboutTedx.number}</span>
              <div>
                <p className="school-fest-eyebrow" lang="en">{copy.aboutTedx.eyebrow}</p>
                <h2 id="about-tedx-title">{copy.aboutTedx.title}</h2>
              </div>
            </header>

            <div className="school-fest-rationale__grid">
              <div className="school-fest-rationale__copy">
                <p>{copy.aboutTedx.intro}</p>
                <p>{copy.aboutTedx.acronymLead}</p>
                <dl className="school-fest-acronym">
                  {copy.aboutTedx.acronym.map((item) => (
                    <div key={item.initial}>
                      <dt>{item.initial}</dt>
                      <dd>
                        <strong lang="en">{item.term}</strong>
                        {item.translation !== item.term && <span>{item.translation}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p>{copy.aboutTedx.body}</p>
                <p>{copy.aboutTedx.tedxBody}</p>
              </div>

              <blockquote className="school-fest-quote">
                <p lang="en">{copy.aboutTedx.quote}</p>
                <footer>{copy.aboutTedx.quoteTranslation}</footer>
              </blockquote>
            </div>

            <div className="school-fest-dialogue">
              <h3>{copy.aboutTedx.dialogueTitle}</h3>
              <div>
                {copy.aboutTedx.dialogue.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <section className="school-fest-watch" aria-labelledby="school-fest-watch-title">
              <header>
                <p className="school-fest-eyebrow" lang="en">Watch</p>
                <h3 id="school-fest-watch-title">{copy.aboutTedx.watchTitle}</h3>
                <p>{copy.aboutTedx.watchIntro}</p>
              </header>
              <div className="school-fest-watch__grid">
                {copy.aboutTedx.videos.map((video) => (
                  <figure key={video.youtubeUrl}>
                    <div className="school-fest-video">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <figcaption>
                      <span>{video.label}</span>
                      <strong>{video.title}</strong>
                      <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        {copy.aboutTedx.watchOnYouTube}
                        <ExternalLink size={17} strokeWidth={2.25} aria-hidden="true" />
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section id="why-debate" className="school-fest-section school-fest-section--light" aria-labelledby="why-debate-title">
          <div className="container">
            <header className="school-fest-section__header">
              <span className="school-fest-section__number" aria-hidden="true">{copy.whyDebate.number}</span>
              <div>
                <p className="school-fest-eyebrow" lang="en">{copy.whyDebate.eyebrow}</p>
                <h2 id="why-debate-title">{copy.whyDebate.title}</h2>
                <p>{copy.whyDebate.intro}</p>
              </div>
            </header>

            <div className="school-fest-debate-context">
              <p>{copy.whyDebate.body}</p>
              <section aria-labelledby="practice-title">
                <h3 id="practice-title">{copy.whyDebate.practiceTitle}</h3>
                <ol>
                  {copy.whyDebate.practices.map((practice, index) => (
                    <li key={practice}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <p>{practice}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <Link className="school-fest-program-link" to="/program">
              {copy.programAction}
              <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="school-fest-references" aria-labelledby="school-fest-references-title">
          <div className="container">
            <header>
              <p className="school-fest-eyebrow" lang="en">{copy.references.eyebrow}</p>
              <h2 id="school-fest-references-title">{copy.references.title}</h2>
              <p>{copy.references.description}</p>
            </header>
            <ol>
              {copy.references.items.map((reference, index) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noopener noreferrer">
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span>
                      <strong>{reference.title}</strong>
                      <small>{reference.description}</small>
                    </span>
                    <ExternalLink size={19} strokeWidth={2.25} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </article>

      <style>{`
        .school-fest-page {
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          background: var(--ted-black);
          color: var(--ted-white);
          overflow-x: hidden;
        }

        @supports (overflow-x: clip) {
          .school-fest-page {
            overflow-x: clip;
          }
        }

        .school-fest-page article,
        .school-fest-hero__copy,
        .school-fest-hero__media,
        .school-fest-section__header > div,
        .school-fest-match__body,
        .school-fest-debate-context section {
          min-width: 0;
        }

        .school-fest-page h1,
        .school-fest-page h2,
        .school-fest-page h3,
        .school-fest-page p,
        .school-fest-page dd,
        .school-fest-page a {
          overflow-wrap: anywhere;
        }

        .school-fest-page h1,
        .school-fest-page h2,
        .school-fest-page h3 {
          text-transform: none;
          text-wrap: pretty;
        }

        .school-fest-hero {
          padding: 10rem 0 5rem;
          background:
            linear-gradient(130deg, rgb(var(--ted-red-rgb) / 0.14), transparent 34rem),
            var(--ted-black);
        }

        .school-fest-hero__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 4rem;
          align-items: center;
        }

        .school-fest-eyebrow {
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .school-fest-hero h1 {
          max-width: 11ch;
          margin-top: 1rem;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .school-fest-hero__lead {
          max-width: 58ch;
          margin-top: 1.75rem;
          color: #c8c8c8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .school-fest-hero__meta {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          color: #9c9c9c;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .school-fest-hero__media img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          outline: 1px solid rgba(255, 255, 255, 0.12);
          outline-offset: -1px;
        }

        .school-fest-hero figcaption,
        .school-fest-leaflet figcaption {
          margin-top: 0.75rem;
          color: #8f8f8f;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .school-fest-contents {
          background: #0b0b0b;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-contents__label {
          padding-top: 1.5rem;
          color: #8f8f8f;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .school-fest-contents ol {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .school-fest-contents li + li {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-contents a {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 1rem;
          min-height: 48px;
          padding: 1.5rem;
          color: var(--ted-white);
        }

        .school-fest-contents a:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .school-fest-contents__number {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
        }

        .school-fest-contents strong,
        .school-fest-contents small {
          display: block;
        }

        .school-fest-contents strong {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
        }

        .school-fest-contents small {
          margin-top: 0.35rem;
          color: #8f8f8f;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .school-fest-section {
          padding: 6rem 0;
          scroll-margin-top: 90px;
        }

        .school-fest-section--light {
          background: #f6f6f3;
          color: #161616;
        }

        .school-fest-section--dark {
          background: var(--ted-black);
          color: var(--ted-white);
        }

        .school-fest-section__header {
          display: grid;
          grid-template-columns: 86px minmax(0, 1fr);
          gap: 2rem;
          max-width: 920px;
          margin-bottom: 4rem;
        }

        .school-fest-section__number {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
        }

        .school-fest-section__header h2 {
          max-width: 22ch;
          margin-top: 0.65rem;
          font-size: clamp(2.35rem, 5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
        }

        .school-fest-section__header > div > p:last-child {
          max-width: 66ch;
          margin-top: 1.25rem;
          color: #555;
          font-size: 1rem;
          line-height: 1.75;
        }

        .school-fest-section--dark .school-fest-section__header > div > p:last-child {
          color: #b5b5b5;
        }

        .school-fest-facts {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-bottom: 4.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.16);
          border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        }

        .school-fest-facts > div {
          padding: 1.35rem 1.5rem;
        }

        .school-fest-facts > div + div {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-facts dt,
        .school-fest-match__body dt,
        .school-fest-match__motion span,
        .school-fest-match__positions > span,
        .school-fest-match__result span {
          color: #6f6f6f;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .school-fest-facts dd {
          margin-top: 0.45rem;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.6;
        }

        .school-fest-overview__layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(260px, 0.55fr);
          gap: 4rem;
          align-items: start;
        }

        .school-fest-subheading,
        .school-fest-debate-context h3 {
          margin-bottom: 1.5rem;
          font-size: 1.55rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .school-fest-matches {
          border-top: 1px solid rgba(0, 0, 0, 0.16);
        }

        .school-fest-matches > li {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 1.5rem;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        .school-fest-match__index {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
        }

        .school-fest-match__body > dl {
          display: grid;
          grid-template-columns: minmax(160px, 0.75fr) minmax(0, 1.25fr);
          gap: 1.5rem;
        }

        .school-fest-match__body dd {
          margin-top: 0.3rem;
          font-weight: 600;
          line-height: 1.55;
        }

        .school-fest-match__motion {
          margin-top: 1.4rem;
        }

        .school-fest-match__motion p {
          margin-top: 0.35rem;
          line-height: 1.7;
        }

        .school-fest-match__motion p + p {
          color: #686868;
          font-size: 0.9rem;
        }

        .school-fest-match__positions {
          margin-top: 1.4rem;
        }

        .school-fest-match__positions dl {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 0.55rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-match__positions dl > div {
          padding: 1rem 1.25rem 1rem 0;
        }

        .school-fest-match__positions dl > div + div {
          padding-right: 0;
          padding-left: 1.25rem;
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-match__positions dt {
          color: #1a1a1a;
          font-size: 0.86rem;
          font-weight: 700;
          line-height: 1.5;
        }

        .school-fest-match__positions dd {
          margin-top: 0.35rem;
          color: #595959;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .school-fest-match__result {
          margin-top: 1.25rem;
          padding-left: 1rem;
          border-left: 3px solid var(--ted-red);
          font-weight: 600;
        }

        .school-fest-match__result span {
          display: block;
          margin-bottom: 0.25rem;
        }

        .school-fest-leaflet {
          position: sticky;
          top: 110px;
        }

        .school-fest-leaflet img {
          display: block;
          width: 100%;
          outline: 1px solid rgba(0, 0, 0, 0.08);
          outline-offset: -1px;
        }

        .school-fest-leaflet figcaption {
          color: #696969;
        }

        .school-fest-rationale__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
          gap: 5rem;
          align-items: start;
          margin-left: 118px;
        }

        .school-fest-rationale__copy > p {
          max-width: 66ch;
          color: #bdbdbd;
          font-size: 1rem;
          line-height: 1.8;
        }

        .school-fest-rationale__copy > p + p {
          margin-top: 1.5rem;
        }

        .school-fest-acronym {
          margin: 1rem 0 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .school-fest-acronym > div {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          padding: 0.85rem 0;
        }

        .school-fest-acronym > div + div {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-acronym dt {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
        }

        .school-fest-acronym dd {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 0.75rem;
          align-items: baseline;
        }

        .school-fest-acronym strong {
          color: var(--ted-white);
          font-size: 1rem;
        }

        .school-fest-acronym span {
          color: #999;
          font-size: 0.88rem;
        }

        .school-fest-program-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          min-height: 48px;
          color: var(--ted-red);
          font-weight: 800;
        }

        .school-fest-quote {
          padding-left: 2rem;
          border-left: 5px solid var(--ted-red);
        }

        .school-fest-quote p {
          font-family: var(--font-heading);
          font-size: clamp(2.6rem, 5vw, 5rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .school-fest-quote footer {
          margin-top: 1.4rem;
          color: #9d9d9d;
          font-size: 1rem;
        }

        .school-fest-dialogue {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          gap: 4rem;
          margin: 4.5rem 0 0 118px;
          padding: 2.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .school-fest-dialogue h3,
        .school-fest-watch h3 {
          font-size: clamp(1.65rem, 3vw, 2.35rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .school-fest-dialogue p,
        .school-fest-watch header > p:last-child {
          color: #bdbdbd;
          font-size: 1rem;
          line-height: 1.85;
        }

        .school-fest-dialogue p + p {
          margin-top: 1.25rem;
        }

        .school-fest-watch {
          margin: 4.5rem 0 0 118px;
        }

        .school-fest-watch > header {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          column-gap: 4rem;
          align-items: end;
          margin-bottom: 2rem;
        }

        .school-fest-watch > header .school-fest-eyebrow {
          grid-column: 1 / -1;
          margin-bottom: 0.65rem;
        }

        .school-fest-watch__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
        }

        .school-fest-watch figure {
          min-width: 0;
          border-top: 3px solid var(--ted-red);
        }

        .school-fest-video {
          position: relative;
          aspect-ratio: 16 / 9;
          background: #050505;
          outline: 1px solid rgba(255, 255, 255, 0.14);
          outline-offset: -1px;
        }

        .school-fest-video iframe {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .school-fest-watch figcaption {
          display: grid;
          gap: 0.45rem;
          padding-top: 1rem;
        }

        .school-fest-watch figcaption > span {
          color: #999;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .school-fest-watch figcaption strong {
          color: var(--ted-white);
          font-size: 1rem;
          line-height: 1.55;
        }

        .school-fest-watch figcaption a {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: fit-content;
          min-height: 48px;
          color: var(--ted-red);
          font-size: 0.88rem;
          font-weight: 800;
        }

        .school-fest-watch figcaption a:hover {
          color: var(--ted-white);
        }

        .school-fest-debate-context {
          max-width: 76ch;
          margin: 0 0 3.5rem 118px;
          padding-left: 1.5rem;
          border-left: 4px solid var(--ted-red);
        }

        .school-fest-debate-context > p {
          color: #383838;
          font-size: 1.04rem;
          line-height: 1.9;
        }

        .school-fest-debate-context section {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-debate-context ol {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-debate-context li {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 1rem;
          padding: 1.1rem 0;
        }

        .school-fest-debate-context li + li {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-debate-context li span {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .school-fest-debate-context li p {
          line-height: 1.75;
        }

        .school-fest-program-link {
          margin: 3rem 0 0 118px;
        }

        .school-fest-program-link:hover {
          color: #161616;
        }

        .school-fest-references {
          padding: 4.5rem 0 5rem;
          background: #0a0a0a;
          color: var(--ted-white);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-references header {
          display: grid;
          grid-template-columns: minmax(180px, 0.42fr) minmax(0, 1fr);
          column-gap: 3rem;
          align-items: end;
          margin-bottom: 2.5rem;
        }

        .school-fest-references header .school-fest-eyebrow {
          grid-column: 1 / -1;
          margin-bottom: 0.75rem;
        }

        .school-fest-references h2 {
          font-size: clamp(2rem, 4vw, 3.25rem);
          letter-spacing: -0.035em;
        }

        .school-fest-references header > p:last-child {
          max-width: 62ch;
          color: #a9a9a9;
          line-height: 1.75;
        }

        .school-fest-references ol {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .school-fest-references li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .school-fest-references a {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr) auto;
          gap: 1rem;
          align-items: center;
          min-height: 48px;
          padding: 1.35rem 0;
          color: var(--ted-white);
        }

        .school-fest-references a > span:first-child {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .school-fest-references a span:nth-child(2) {
          display: grid;
          gap: 0.3rem;
        }

        .school-fest-references a strong {
          font-size: 1rem;
        }

        .school-fest-references a small {
          color: #9d9d9d;
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .school-fest-references a svg {
          color: var(--ted-red);
          transition: transform 160ms ease;
        }

        .school-fest-references a:hover svg {
          transform: translate(2px, -2px);
        }

        @media (max-width: 900px) {
          .school-fest-hero__layout,
          .school-fest-overview__layout,
          .school-fest-rationale__grid {
            grid-template-columns: 1fr;
          }

          .school-fest-hero__layout {
            gap: 3rem;
          }

          .school-fest-contents ol {
            grid-template-columns: 1fr;
          }

          .school-fest-contents li + li {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 0;
          }

          .school-fest-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .school-fest-facts > div + div {
            border-left: 0;
          }

          .school-fest-facts > div:nth-child(even) {
            border-left: 1px solid rgba(0, 0, 0, 0.1);
          }

          .school-fest-facts > div:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .school-fest-leaflet {
            position: static;
            max-width: 520px;
          }

          .school-fest-rationale__grid,
          .school-fest-dialogue,
          .school-fest-watch,
          .school-fest-debate-context,
          .school-fest-program-link {
            margin-left: 0;
          }

          .school-fest-rationale__grid {
            gap: 3rem;
          }

          .school-fest-dialogue,
          .school-fest-watch > header {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .school-fest-hero {
            padding: 8rem 0 4rem;
          }

          .school-fest-hero h1 {
            font-size: clamp(2.75rem, 14vw, 4rem);
          }

          .school-fest-hero__lead,
          .school-fest-section__header > div > p:last-child,
          .school-fest-rationale__copy > p,
          .school-fest-debate-context > p,
          .school-fest-debate-context li p {
            font-size: 1rem;
          }

          .school-fest-contents a {
            padding: 1.25rem 0;
          }

          .school-fest-section {
            padding: 4.5rem 0;
          }

          .school-fest-section__header {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 3rem;
          }

          .school-fest-section__number {
            font-size: 2.5rem;
          }

          .school-fest-section__header h2 {
            font-size: clamp(2.15rem, 11vw, 3.2rem);
          }

          .school-fest-facts {
            grid-template-columns: 1fr;
            margin-bottom: 3.5rem;
          }

          .school-fest-facts > div,
          .school-fest-facts > div:nth-child(even),
          .school-fest-facts > div:nth-child(-n + 2) {
            padding: 1.1rem 0;
            border-right: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            border-left: 0;
          }

          .school-fest-facts > div:last-child {
            border-bottom: 0;
          }

          .school-fest-overview__layout {
            gap: 3rem;
          }

          .school-fest-matches > li {
            grid-template-columns: 1fr;
            gap: 0.65rem;
          }

          .school-fest-match__body > dl {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .school-fest-match__positions dl {
            grid-template-columns: 1fr;
          }

          .school-fest-match__positions dl > div,
          .school-fest-match__positions dl > div + div {
            padding: 0.9rem 0;
            border-left: 0;
          }

          .school-fest-match__positions dl > div + div {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }

          .school-fest-quote {
            padding-left: 1.25rem;
          }

          .school-fest-dialogue {
            margin-top: 3.5rem;
            padding: 2rem 0;
          }

          .school-fest-watch {
            margin-top: 3.5rem;
          }

          .school-fest-watch__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .school-fest-debate-context {
            padding-left: 1rem;
            font-size: 1rem;
          }

          .school-fest-references {
            padding: 4rem 0;
          }

          .school-fest-references header {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .school-fest-references a {
            grid-template-columns: 36px minmax(0, 1fr) auto;
            gap: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .school-fest-page a {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
};

export default SchoolFest2026Page;
