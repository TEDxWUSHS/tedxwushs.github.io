import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "TEDxWUSHSとは何ですか？",
    answer: "早稲田大学高等学院の生徒が立ち上げ、運営しているTEDxイベントです。若者の視点から『広める価値のあるアイデア』を発信することを目的としています。"
  },
  {
    question: "誰でも参加できますか？",
    answer: "先着100名の方がご参加いただけます。詳細はチケット情報をご確認ください。"
  },
  {
    question: "ボランティアとして参加したいのですが、どうすればいいですか？",
    answer: "運営メンバー募集の時期になりましたら、ウェブサイトの『Join Us』ページにて詳細を掲載します。SNSでも告知を行いますので、ぜひフォローをお願いします。"
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={`icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="highlight-red">Questions</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          background-color: var(--ted-black);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          transition: color 0.3s;
        }

        .faq-question:hover {
          color: var(--ted-red);
        }

        .icon {
          font-size: 1.5rem;
          transition: transform 0.3s;
        }

        .icon.open {
          transform: rotate(45deg);
          color: var(--ted-red);
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          padding-bottom: 2rem;
          color: #888;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
