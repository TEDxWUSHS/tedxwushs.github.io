import enomotoImage from '../assets/speakers/enomoto-takayuki.jpg';
import hasegawaImage from '../assets/speakers/hasegawa-keisuke.jpg';
import hirumaImage from '../assets/speakers/reon-hiruma.jpg';
import horiseImage from '../assets/speakers/horise-yoshito.jpg';
import kogureImage from '../assets/speakers/kogure-masahisa.jpg';
import kurokiImage from '../assets/speakers/kuroki-yuto.jpg';
import takezawaImage from '../assets/speakers/takezawa-mamoru.jpg';

// Source material is maintained in three folders under docs/speaker-info/:
// picture/ -> optimized copies in src/assets/speakers/, intro/ -> intro,
// speech-info/ and event pamphlets -> talk. Add future speakers here so the Home
// preview and the full /speakers page stay in sync.
export const groupSpeakersForDisplay = (speakerEntries) => {
  const rows = [];
  let offset = 0;

  [2, 2].forEach((rowSize) => {
    if (offset >= speakerEntries.length) return;
    rows.push(speakerEntries.slice(offset, offset + rowSize));
    offset += rowSize;
  });

  while (offset < speakerEntries.length) {
    rows.push(speakerEntries.slice(offset, offset + 3));
    offset += 3;
  }

  return rows;
};

export const speakers = [
  {
    id: 'enomoto-takayuki',
    displayOrder: 30,
    published: true,
    featured: true,
    image: enomotoImage,
    imagePosition: '50% 42%',
    name: {
      ja: '榎本 隆之',
      en: 'Takayuki Enomoto',
    },
    role: {
      ja: '早稲田大学高等学院 国語科教員',
      en: 'Japanese Language Educator, Waseda University Senior High School',
    },
    shortBio: {
      ja: '国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。',
      en: 'A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education.',
    },
    talk: {
      title: {
        ja: 'The glasses we forgot we were wearing: How native language shapes our reality',
        en: 'The glasses we forgot we were wearing: How native language shapes our reality',
      },
      language: {
        ja: '英語スピーチ',
        en: 'Talk in English',
      },
      description: {
        ja: '日本語、英語、韓国語など、私たちが使う言語は、ものの見え方や人の振る舞い方、物語の読み取り方に影響を与えています。しかし、私たちはその影響を普段あまり意識していません。本トークでは、母語という「色メガネ」が私たちの現実の捉え方をどのように形づくっているのかを探ります。',
        en: 'The languages we use—such as Japanese, English, and Korean—influence how we see things, how people behave, and how we interpret stories. Yet we rarely notice that influence in everyday life. This talk explores how the “glasses” of our native language shape the way we perceive reality.',
      },
    },
    intro: {
      ja: [
        '1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。',
        '高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。',
      ],
      en: [
        'An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.',
        'He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs.',
      ],
    },
  },
  {
    id: 'hasegawa-keisuke',
    displayOrder: 70,
    published: true,
    featured: true,
    image: hasegawaImage,
    imagePosition: '50% 42%',
    name: {
      ja: '長谷川 慶佑',
      en: 'Keisuke Hasegawa',
    },
    role: {
      ja: '早稲田大学高等学院 1年',
      en: 'First-year Student, Waseda University Senior High School',
    },
    shortBio: {
      ja: '中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。',
      en: 'Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature.',
    },
    talk: {
      title: {
        ja: '過去を未来へ活かす大切さ',
        en: 'Turning the Past into the Future',
      },
      language: {
        ja: '日本語スピーチ',
        en: 'Talk in Japanese',
      },
      description: {
        ja: '出身地である福島県で原発事故を経験し、日常生活が一変したスピーカーは、その経験を踏まえ、中学校でビオトープ活動に精力的に取り組みました。本トークでは、過去の経験を糧として行動を起こすことの大切さについて語ります。',
        en: 'After experiencing the nuclear power plant accident in his home prefecture of Fukushima and seeing daily life change completely, the speaker drew on that experience to devote himself to biotope activities in junior high school. This talk considers the importance of turning past experiences into motivation for action.',
      },
    },
    intro: {
      ja: [
        '2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。',
        'さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。',
      ],
      en: [
        'Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.',
        'The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date.',
      ],
    },
  },
  {
    id: 'horise-yoshito',
    displayOrder: 60,
    published: true,
    featured: true,
    image: horiseImage,
    imagePosition: '50% 45%',
    name: {
      ja: '堀瀬 善仁',
      en: 'Yoshito Horise',
    },
    role: {
      ja: '早稲田大学高等学院 2年',
      en: 'Second-year Student, Waseda University Senior High School',
    },
    shortBio: {
      ja: '早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。',
      en: 'A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool.',
    },
    talk: {
      title: {
        ja: '100,000 Words of Self-Analysis: Why You Don’t Have to Pick the “Real” You',
        en: '100,000 Words of Self-Analysis: Why You Don’t Have to Pick the “Real” You',
      },
      language: {
        ja: '英語スピーチ',
        en: 'Talk in English',
      },
      description: {
        ja: '7回の転校と7回の留学を経験したスピーカーは、いつしか自分の頭の中に、正反対の考えを持つ二人の「同居人」がいることに気づきました。長年にわたり二人と向き合い、葛藤を重ねてきた経験をもとに、本トークでは「本当の自分」とは何なのか、そして一つの自分を選ぶ必要があるのかについて考えます。',
        en: 'After changing schools seven times and studying abroad seven times, the speaker came to recognize two “roommates” in his mind who held opposing views. Drawing on years of confronting and struggling with both, this talk asks what the “real self” is—and whether we need to choose only one version of ourselves.',
      },
    },
    intro: {
      ja: [
        '早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランスでの国際経験を積む。日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。',
        '東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。',
      ],
      en: [
        'A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, and France. Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.',
        'He received the Excellence Award at the University of Tokyo AI Hackathon and developed “KATA,” a language-learning tool that utilizes AI-based posture recognition. He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena.',
      ],
    },
  },
  {
    id: 'kuroki-yuto',
    displayOrder: 50,
    published: true,
    featured: true,
    image: kurokiImage,
    imagePosition: '50% 44%',
    name: {
      ja: '黒木 勇人',
      en: 'Yuto Kuroki',
    },
    role: {
      ja: '早稲田大学 情報理工学科2年',
      en: 'Second-year Computer Science Student, Waseda University',
    },
    shortBio: {
      ja: 'ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。',
      en: 'Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research.',
    },
    talk: {
      title: {
        ja: 'Don’t Find Your Passion. Build It.',
        en: 'Don’t Find Your Passion. Build It.',
      },
      language: {
        ja: '英語スピーチ',
        en: 'Talk in English',
      },
      description: {
        ja: '情熱は、ある日突然見つかるものではなく、自ら築いていくものです。AI研究への情熱を育んできたスピーカーは、その経験を通じて、情熱を育てる過程の大切さを実感しました。本トークでは、情熱を築くための具体的なステップと、自分らしい人生の方向性を見つける方法について語ります。',
        en: 'Passion is not something we suddenly discover one day; it is something we build. Through developing his own passion for AI research, the speaker came to understand the value of that process. This talk presents practical steps for building passion and finding a direction in life that feels true to you.',
      },
    },
    intro: {
      ja: [
        '早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏からは、中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究している。',
        '外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。',
      ],
      en: [
        'A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. Since summer 2026, he has been conducting research on deep-learning models for robotic exoskeletons at the Georgia Institute of Technology as a Nakatani Foundation scholar.',
        'Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team.',
      ],
    },
  },
  {
    id: 'kogure-masahisa',
    displayOrder: 10,
    published: true,
    featured: true,
    image: kogureImage,
    imagePosition: '50% 42%',
    name: {
      ja: '小暮 真久',
      en: 'Masahisa Kogure',
    },
    role: {
      ja: '社会起業家',
      en: 'Social Entrepreneur',
    },
    shortBio: {
      ja: 'TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。',
      en: 'Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations.',
    },
    talk: {
      title: {
        ja: 'BECOME A STRANGER 自分に出会うために',
        en: 'BECOME A STRANGER: To Meet Yourself',
      },
      language: {
        ja: '日本語スピーチ',
        en: 'Talk in Japanese',
      },
      description: {
        ja: 'あなたのすぐ隣にも、まだ開けていない「Gate」がある。いつもの世界から一歩外へ出て、知らない世界に飛び込んでみる。出会うのは、まだ知らなかった自分かもしれない。人生でいくつものGateを開けてきた経験から、知らない世界へ一歩踏み出すことが、自分を発見するきっかけになることを語ります。',
        en: 'There may be an unopened “Gate” right beside you. Step beyond the familiar and enter a world you do not know; the person you meet there may be a self you have never discovered. Drawing on a life of opening many such gates, this talk shows how taking one step into the unknown can become an opportunity to discover yourself.',
      },
    },
    intro: {
      ja: [
        '早稲田大学卒業後、オーストラリアで人工心臓の研究に従事。その後、マッキンゼー・アンド・カンパニーを経て、社会課題の解決を目指すTABLE FOR TWOを創設。約800の企業・団体を巻き込み、日本最大規模の社会運動へと成長させる。研究、ビジネス、社会課題など異なる世界を越境しながら、新しい仕組みや事業を生み出してきた。現在も医療・AIをはじめ、さまざまな領域で新たな挑戦を続けている。',
      ],
      en: [
        'After graduating from Waseda University, he conducted artificial-heart research in Australia. He later worked at McKinsey & Company before founding TABLE FOR TWO to address social challenges. By involving around 800 companies and organizations, he grew the initiative into one of Japan’s largest social movements. Crossing boundaries among research, business, and social issues, he has created new systems and ventures, and he continues to take on new challenges in healthcare, AI, and other fields.',
      ],
    },
  },
  {
    id: 'takezawa-mamoru',
    displayOrder: 40,
    published: true,
    featured: true,
    image: takezawaImage,
    imagePosition: '42% 50%',
    name: {
      ja: '武沢 護',
      en: 'Mamoru Takezawa',
    },
    role: {
      ja: '早稲田大学高等学院 前学院長',
      en: 'Former Headmaster of Waseda University Senior High School',
    },
    shortBio: {
      ja: '長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。',
      en: 'A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure.',
    },
    talk: {
      title: {
        ja: '偶然と想像力 — AI時代の意志決定 —',
        en: 'Chance and Imagination: Decision-Making in the AI Era',
      },
      language: {
        ja: '日本語スピーチ',
        en: 'Talk in Japanese',
      },
      description: {
        ja: '人類はこれまで、さまざまな場面で判断を重ね、意思決定を通じて生き延びてきました。AI時代を迎えた今、意思決定はどのように変化するのでしょうか。本トークでは、「偶然」という概念を手がかりに、現代における意思決定と想像力の重要性について考えます。',
        en: 'Throughout history, humanity has survived by making judgments and decisions in many different situations. How will decision-making change in the age of AI? Using the concept of “chance” as a starting point, this talk considers the importance of decision-making and imagination today.',
      },
    },
    intro: {
      ja: [
        '早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。',
      ],
      en: [
        'Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure.',
      ],
    },
  },
  {
    id: 'reon-hiruma',
    displayOrder: 20,
    published: true,
    featured: true,
    image: hirumaImage,
    imagePosition: '50% 42%',
    name: {
      ja: '比留間 礼音',
      en: 'Reon Hiruma',
    },
    role: {
      ja: 'ベンチャーキャピタリスト',
      en: 'Venture Capitalist',
    },
    shortBio: {
      ja: 'ヘルスケア、産業技術、安全保障領域のディープテックに投資し、防衛技術コミュニティJDTIも運営している。',
      en: 'A venture capitalist investing in deep tech across healthcare, industrial technology, and security, and the operator of the JDTI defense technology community.',
    },
    talk: {
      title: {
        ja: 'Learning New Perspectives: Why I Keep Learning Languages',
        en: 'Learning New Perspectives: Why I Keep Learning Languages',
      },
      language: {
        ja: '英語スピーチ',
        en: 'Talk in English',
      },
      description: {
        ja: '日本語とオランダ語から出発し、独学で英語とフランス語を習得したスピーカー。言語学習によって広がった人とのつながりや世界の見え方を通して、AI翻訳が普及した今も言語を学ぶ意味を考えます。',
        en: 'Starting with Japanese and Dutch, the speaker went on to teach himself English and French. Through the relationships and perspectives that language learning opened up, this talk considers why learning languages still matters in an age of widely available AI translation.',
      },
    },
    intro: {
      ja: [
        'ヘルスケア、産業技術、安全保障領域のディープテックに投資するベンチャーキャピタリスト。早稲田大学在学中の2018年にPotentialist Globalを共同創業し、欧米の技術系企業20社以上の日本・アジア進出を支援。2026年より国内大手VCで投資を担当する。投資の傍ら、防衛技術コミュニティJDTIを運営し、技術系スタートアップが安全保障に果たしうる役割を議論する場づくりに取り組む。オランダ人と日本人の両親をもち、四言語に堪能。',
      ],
      en: [
        'Reon Hiruma is a venture capitalist investing in deep tech across healthcare, industrial technology, and security. While at Waseda University, he co-founded Potentialist Global in 2018 and helped over 20 US and European technology companies enter Japan and Asia. In 2026, he joined a leading Japanese venture capital firm. Alongside his work as an investor, Reon runs JDTI, a defense technology community that brings people together to discuss the role startups can play in national security. Born to Dutch and Japanese parents, he speaks four languages.',
      ],
    },
  },
];
