import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Music2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const OFFICIAL_GUIDE_URL = 'https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-website#h3--about-page';

const JA_TEDX_DESCRIPTION = 'アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。';

const JA_TED_INTRO = 'TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。';

const JA_TED_HISTORY = 'TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。';

const JA_TED_INITIATIVES = 'Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。';

const AboutPage = () => {
    const { language } = useLanguage();
    const isJapanese = language === 'ja';

    return (
        <div className="about-page">
            <div className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <section className="about-section">
                        <h1 className="page-title">
                            {isJapanese ? <><span className="highlight-red">TEDx</span>について</> : <>About <span className="highlight-red">TEDx</span></>}
                        </h1>
                        <h2 className="sub-title">
                            {isJapanese
                                ? 'TEDxについて — x = independently organized event（独立して運営されるイベント）'
                                : 'TEDx, x = independently organized event'}
                        </h2>
                        <p>
                            {isJapanese ? JA_TEDX_DESCRIPTION : (
                                <>
                            In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                                </>
                            )}
                        </p>
                        <p className="official-guide">
                            {isJapanese ? '掲載内容の基準：' : 'Source for this page: '}
                            <a
                                href={OFFICIAL_GUIDE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="highlight-link"
                            >
                                {isJapanese
                                    ? 'TED公式ガイド「Your event website」'
                                    : 'TED official guide: Your event website'}
                            </a>
                        </p>
                    </section>

                    <section className="about-section">
                        <h2 className="section-title">
                            {isJapanese ? <><span className="highlight-red">TED</span>について</> : <>About <span className="highlight-red">TED</span></>}
                        </h2>
                        <p>
                            {isJapanese ? JA_TED_INTRO : 'TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.'}
                        </p>
                        {isJapanese && (
                            <>
                                <p>{JA_TED_HISTORY}</p>
                                <p>{JA_TED_INITIATIVES}</p>
                                <p>
                                    <a
                                        href="https://www.ted.com/about/programs-initiatives"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="highlight-link"
                                    >
                                        TEDのプログラムと取り組みの一覧を見る
                                    </a>
                                </p>
                            </>
                        )}
                        <p hidden={isJapanese}>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. <a href="https://www.ted.com/about/programs-initiatives" target="_blank" rel="noopener" className="highlight-link">View a full list of TED’s many programs and initiatives.</a>
                        </p>

                        <div className="ted-social">
                            <p>{isJapanese ? 'TEDの公式アカウント' : 'Follow TED on:'}</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/TED" target="_blank" rel="noopener noreferrer" aria-label="TED on Facebook"><Facebook size={24} /></a>
                                <a href="https://www.instagram.com/ted" target="_blank" rel="noopener noreferrer" aria-label="TED on Instagram"><Instagram size={24} /></a>
                                <a href="https://www.linkedin.com/company/ted-conferences" target="_blank" rel="noopener noreferrer" aria-label="TED on LinkedIn"><Linkedin size={24} /></a>
                                <a href="https://twitter.com/TEDTalks" target="_blank" rel="noopener noreferrer" aria-label="TED on X"><Twitter size={24} /></a>
                                <a href="https://www.tiktok.com/@tedtoks" target="_blank" rel="noopener noreferrer" aria-label="TED on TikTok"><Music2 size={24} /></a>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>

            <style>{`
                .about-page {
                    padding-top: 100px;
                    background-color: var(--ted-black);
                    color: var(--ted-white);
                    min-height: 100vh;
                }

                .page-title {
                    font-size: 3.5rem;
                    margin-bottom: 3rem;
                    text-align: center;
                }

                .about-section {
                    max-width: 800px;
                    margin: 0 auto 5rem;
                }

                .sub-title {
                    font-size: 1.5rem;
                    color: var(--ted-red);
                    margin-bottom: 1.5rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                }

                p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #ccc;
                    margin-bottom: 2rem;
                }

                .highlight-link {
                    color: var(--ted-red);
                    text-decoration: underline;
                }

                .official-guide {
                    padding: 1rem 1.25rem;
                    border-left: 3px solid var(--ted-red);
                    background: var(--ted-dark-gray);
                    font-size: 1rem;
                }

                .ted-social {
                    margin-top: 3rem;
                    padding: 2rem;
                    background: var(--ted-dark-gray);
                    border-radius: 12px;
                    text-align: center;
                }

                .ted-social p {
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                }

                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                }

                .social-links a {
                    color: white;
                    transition: var(--transition-smooth);
                }

                .social-links a:hover {
                    color: var(--ted-red);
                    transform: translateY(-5px);
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
