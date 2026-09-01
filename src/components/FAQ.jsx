import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const faqsByLanguage = {
  ja: [
    {
      question: 'TEDxWUSHS Youthとは何ですか？',
      answer: '早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。'
    },
    {
      question: '参加対象者を教えてください。',
      answer: '参加対象者は、早稲田大学高等学院の生徒（学院生）とその保護者です。参加申込みは2学期開始時点に受付を始める予定で、詳細はウェブサイトと公式SNSでご案内します。'
    },
    {
      question: 'イベントでは何語が使用されますか？',
      answer: '日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。'
    },
    {
      question: '参加費はかかりますか？',
      answer: '参加費は無料です。'
    },
    {
      question: 'ボランティアとして参加したいのですが、どうすればいいですか？',
      answer: '2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトの『Join Us』ページと公式SNSでお知らせします。'
    }
  ],
  en: [
    {
      question: 'What is TEDxWUSHS Youth?',
      answer: 'TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change.'
    },
    {
      question: 'Who can attend?',
      answer: 'The event is open to students of Waseda University Senior High School and their parents or guardians. Registration is scheduled to open at the start of the second school term, with details to be announced on this website and our official social media channels.'
    },
    {
      question: 'What languages will be used at the event?',
      answer: 'The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides.'
    },
    {
      question: 'Is there an admission fee?',
      answer: 'The event is free to attend.'
    },
    {
      question: 'How can I participate as a volunteer?',
      answer: 'Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on the Join Us page and our official social media channels.'
    }
  ]
};

const listHeadingByLanguage = {
  ja: '質問と回答',
  en: 'Questions and Answers',
};

// FAQItem receives data only from the localized FAQ lists above.
// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const questionId = `${id}-question`;
  const answerId = `${id}-answer`;

  return (
    <div className="faq-item">
      <h3 className="faq-question-heading">
        <button
          id={questionId}
          type="button"
          className="faq-question"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
        >
          <span>{question}</span>
          <span className={`icon ${isOpen ? 'open' : ''}`} aria-hidden="true">+</span>
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const FAQ = ({ hideHeader = false }) => {
  const { language } = useLanguage();
  const faqs = faqsByLanguage[language] ?? faqsByLanguage.ja;

  return (
    <section id="faq" className="faq section-padding" aria-labelledby="faq-list-heading">
      <div className="container">
        {hideHeader ? (
          <h2 id="faq-list-heading" className="visually-hidden">
            {listHeadingByLanguage[language]}
          </h2>
        ) : (
          <div className="section-header">
            <h2 id="faq-list-heading" className="section-title" lang="en">
              Frequently Asked <span className="highlight-red">Questions</span>
            </h2>
          </div>
        )}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const id = `faq-${language}-${index + 1}`;

            return <FAQItem key={id} id={id} {...faq} />;
          })}
        </div>
      </div>

      <style>{`
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

        .faq-question-heading {
          font-family: inherit;
          letter-spacing: normal;
          text-transform: none;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 2rem 0;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          transition: color 0.3s;
        }

        .faq-question > span:first-child {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .faq-question:hover {
          color: var(--ted-red);
        }

        .faq-question:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .icon {
          flex-shrink: 0;
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
          color: #aaa;
          line-height: 1.8;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-question,
          .icon {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
