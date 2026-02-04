import React from 'react';

const GoogleFormEmbed = ({ formUrl, title, height = '800px' }) => {
  // Google FormsのURLから埋め込み用URLを生成
  const embedUrl = formUrl.includes('/viewform')
    ? formUrl.replace('/viewform', '/viewform?embedded=true')
    : formUrl + '?embedded=true';

  return (
    <div className="google-form-wrapper">
      <div className="google-form-container">
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title={title}
        >
          読み込んでいます…
        </iframe>
      </div>

      <style jsx>{`
        .google-form-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 2rem 0;
        }

        .google-form-container {
          width: 100%;
          max-width: 800px;
          background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(235, 0, 40, 0.1);
          position: relative;
        }

        .google-form-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--ted-red), #ff1a40);
        }

        iframe {
          display: block;
          background: white;
        }

        @media (max-width: 768px) {
          .google-form-wrapper {
            padding: 1rem 0;
          }
          
          .google-form-container {
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default GoogleFormEmbed;
