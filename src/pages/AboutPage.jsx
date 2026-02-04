import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Music2 } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <section className="about-section">
                        <h1 className="page-title">About <span className="highlight-red">TEDx</span></h1>
                        <h2 className="sub-title">TEDx, x = independently organized event</h2>
                        <p>
                            In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                        </p>
                    </section>

                    <section className="about-section">
                        <h2 className="section-title">About <span className="highlight-red">TED</span></h2>
                        <p>
                            TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                        </p>
                        <p>
                            TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. <a href="https://www.ted.com/about/programs-initiatives" target="_blank" rel="noopener" className="highlight-link">View a full list of TED’s many programs and initiatives.</a>
                        </p>

                        <div className="ted-social">
                            <p>Follow TED on:</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/TED" target="_blank" rel="noopener"><Facebook size={24} /></a>
                                <a href="https://www.instagram.com/ted" target="_blank" rel="noopener"><Instagram size={24} /></a>
                                <a href="https://www.linkedin.com/company/ted-conferences" target="_blank" rel="noopener"><Linkedin size={24} /></a>
                                <a href="https://twitter.com/TEDTalks" target="_blank" rel="noopener"><Twitter size={24} /></a>
                                <a href="https://www.tiktok.com/@tedtoks" target="_blank" rel="noopener"><Music2 size={24} /></a>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>

            <style jsx>{`
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
