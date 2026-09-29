import enomotoImage from '../assets/speakers/enomoto-takayuki.jpg';
import hasegawaImage from '../assets/speakers/hasegawa-keisuke.jpg';
import hirumaImage from '../assets/speakers/reon-hiruma.jpg';
import horiseImage from '../assets/speakers/horise-yoshito.jpg';
import kogureImage from '../assets/speakers/kogure-masahisa.jpg';
import kurokiImage from '../assets/speakers/kuroki-yuto.jpg';
import takezawaImage from '../assets/speakers/takezawa-mamoru.jpg';

// Source material is maintained in three folders under docs/speaker-info/:
// picture/ -> optimized copies in src/assets/speakers/, intro/ -> intro,
// speech-info/ -> optional speechInfo. Add future speakers here so the Home
// preview and the full /speakers page stay in sync.
export const speakers = [
  {
    id: 'enomoto-takayuki',
    displayOrder: 10,
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
    displayOrder: 40,
    published: true,
    featured: true,
    image: hasegawaImage,
    imagePosition: '50% 42%',
    name: {
      ja: '長谷川 慶佑',
      en: 'Keisuke Hasegawa',
    },
    role: {
      ja: 'TEDxWUSHS Youth Speaker',
      en: 'TEDxWUSHS Youth Speaker',
    },
    shortBio: {
      ja: '中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。',
      en: 'Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature.',
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
    displayOrder: 50,
    published: true,
    featured: true,
    image: horiseImage,
    imagePosition: '50% 45%',
    name: {
      ja: '堀瀬 善仁',
      en: 'Yoshito Horise',
    },
    role: {
      ja: 'TEDxWUSHS Youth Speaker',
      en: 'TEDxWUSHS Youth Speaker',
    },
    shortBio: {
      ja: '早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。',
      en: 'A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool.',
    },
    intro: {
      ja: [
        '早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランス・トロント大学での国際経験を積む。',
        '日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。',
        '東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。',
        '現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。',
      ],
      en: [
        'A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, France, and at the University of Toronto.',
        'Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.',
        'He received the Excellence Award at the University of Tokyo AI Hackathon. He developed “KATA,” a language-learning tool that utilizes AI-based posture recognition.',
        'He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena.',
      ],
    },
  },
  {
    id: 'kuroki-yuto',
    displayOrder: 20,
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
    intro: {
      ja: [
        '早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏には中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究予定。',
        '外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。',
      ],
      en: [
        'A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. In summer 2026, he will conduct research on deep-learning models for robotic exoskeletons at Georgia Institute of Technology as a Nakatani Foundation scholar.',
        'Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team.',
      ],
    },
  },
  {
    id: 'kogure-masahisa',
    displayOrder: 60,
    published: true,
    featured: true,
    image: kogureImage,
    imagePosition: '50% 42%',
    name: {
      ja: '小暮 真久',
      en: 'Masahisa Kogure',
    },
    role: {
      ja: 'TABLE FOR TWO 創設者',
      en: 'Founder, TABLE FOR TWO',
    },
    shortBio: {
      ja: 'TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。',
      en: 'Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations.',
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
    displayOrder: 30,
    published: true,
    featured: true,
    image: takezawaImage,
    imagePosition: '42% 50%',
    name: {
      ja: '武沢 護',
      en: 'Mamoru Takezawa',
    },
    role: {
      ja: '早稲田大学高等学院前学院長',
      en: 'Former Headmaster of Waseda University Senior High School',
    },
    shortBio: {
      ja: '長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。',
      en: 'A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure.',
    },
    intro: {
      ja: [
        '早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。',
      ],
      en: [
        'Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure.',
      ],
    },
    speechInfo: {
      ja: 'これまでの教育経験をもとに、TEDxWUSHS Youthのテーマ「Breakshot」に沿って、AI・デジタル時代の予測不可能な未来に向けて、私たちが身につけるべき資質と能力について議論する。',
      en: 'Drawing on his experience in education and in keeping with the TEDxWUSHS Youth theme “Breakshot,” he will discuss the qualities and capabilities we should develop as we face an unpredictable future in the age of AI and digital technology.',
    },
  },
  {
    id: 'reon-hiruma',
    displayOrder: 70,
    published: true,
    featured: true,
    image: hirumaImage,
    imagePosition: '50% 42%',
    name: {
      ja: 'Reon Hiruma',
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
