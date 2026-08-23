import JoinUsSection from '../components/JoinUs';
import { useLanguage } from '../i18n/LanguageContext';

const JoinUsPage = () => {
    const { language } = useLanguage();

    return (
        <main id="main-content" tabIndex={-1} className="join-us-page">
            <header className="join-us-page-heading container">
                <span lang="en">Be part of the community</span>
                <h1 lang="en">Join <span className="highlight-red">Us</span></h1>
                <p>
                    {language === 'ja'
                        ? 'TEDxWUSHS Youthへの参加方法と最新情報をご案内します。'
                        : 'Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.'}
                </p>
            </header>
            <JoinUsSection hideHeader />

            <style>{`
                .join-us-page {
                    min-height: 80vh;
                    padding-top: 100px;
                    background: var(--ted-black);
                }

                .join-us-page-heading {
                    padding-top: 4rem;
                    text-align: center;
                }

                .join-us-page-heading > span {
                    display: block;
                    margin-bottom: 1rem;
                    color: var(--ted-red);
                    font-size: 0.75rem;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                }

                .join-us-page-heading h1 {
                    font-size: clamp(2.5rem, 7vw, 4rem);
                }

                .join-us-page-heading p {
                    max-width: 600px;
                    margin: 1.5rem auto 0;
                    color: #b3b3b3;
                    font-size: 1.1rem;
                }

                .join-us-page .join-us .recruitment-closed {
                    margin-top: 0;
                }

                @media (max-width: 640px) {
                    .join-us-page-heading {
                        padding-top: 2.5rem;
                    }
                }
            `}</style>
        </main>
    );
};

export default JoinUsPage;
