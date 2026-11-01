import { useLanguage } from '../i18n/LanguageContext';

const RecruitmentNotice = () => {
  const { language } = useLanguage();
  return (
    <aside className="recruitment-notice" aria-label={language === 'ja' ? '来年度の募集について' : 'Next year’s recruitment'}>
      <p>{language === 'ja'
        ? '掲載しているスピーカー・チームは2026年のメンバーです。来年度（2027年）のスピーカーと運営チームメンバーの募集は、公式SNSで行います。'
        : 'The speakers and team shown here are the 2026 members. Recruitment for 2027 speakers and organizing team members will take place on our official social media channels.'}</p>
      <div className="recruitment-notice__links">
        <a href="https://www.instagram.com/tedxwushs/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        <a href="https://x.com/TEDxWUSHS" target="_blank" rel="noopener noreferrer">X ↗</a>
      </div>
    </aside>
  );
};

export default RecruitmentNotice;
