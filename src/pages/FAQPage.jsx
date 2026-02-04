import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--ted-black)' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <FAQ />
            </motion.div>
        </div>
    );
};

export default FAQPage;
