import FAQ from '../components/FAQ';
import { motion, useReducedMotion } from 'framer-motion';

const FAQPage = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main id="main-content" tabIndex={-1} className="faq-page">
            <header className="faq-page-heading container">
                <h1 lang="en">Frequently Asked <span className="highlight-red">Questions</span></h1>
            </header>
            <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
                <FAQ hideHeader />
            </motion.div>

            <style>{`
                .faq-page {
                    min-height: 80vh;
                    padding-top: 100px;
                    background-color: var(--ted-black);
                }

                .faq-page-heading {
                    padding-top: 4rem;
                    text-align: center;
                }

                .faq-page-heading h1 {
                    font-size: clamp(2.4rem, 7vw, 4rem);
                }

                @media (max-width: 640px) {
                    .faq-page-heading {
                        padding-top: 2.5rem;
                    }
                }
            `}</style>
        </main>
    );
};

export default FAQPage;
