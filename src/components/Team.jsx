import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const members = [
    {
      role: 'Co-Organizer',
      name: '松田 龍昌',
      englishName: 'Tatsuaki Matsuda',
      grade: '2-J'
    },
    {
      role: 'Organizer',
      name: '川俣 晴輝',
      englishName: 'Haruki Kawamata',
      grade: '2-F',
      main: true
    },
    {
      role: 'Co-Organizer',
      name: '坂井 寛徳',
      englishName: 'Hironori Sakai',
      grade: '1-D'
    }
  ];

  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our <span className="highlight-red">Team</span></h2>
          <p className="section-subtitle">The driving force behind TEDxWUSHS Youth.</p>
        </motion.div>

        <div className="team-grid">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className={`team-card ${member.main ? 'main-member' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-inner">
                <span className="member-role">{member.role}</span>
                <div className="member-info">
                  <span className="member-grade">{member.grade}</span>
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-en-name">{member.englishName}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team {
          background-color: var(--ted-black);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-subtitle {
          color: #666;
          margin-top: 1rem;
          font-size: 1.1rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        .team-card {
          background: var(--ted-dark-gray);
          border-radius: 12px;
          padding: 2.5rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
          display: flex;
          flex-direction: column;
          will-change: transform, opacity;
        }

        .team-card:hover {
          transform: translateY(-10px) !important;
          border-color: var(--ted-red);
          box-shadow: 0 20px 40px rgba(235, 0, 40, 0.1);
        }

        .main-member {
          background: linear-gradient(145deg, var(--ted-dark-gray), #000);
          border: 1px solid rgba(235, 0, 40, 0.3);
        }

        .card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .member-role {
          font-family: var(--font-heading);
          color: var(--ted-red);
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          padding: 0.4rem 0.8rem;
          background: rgba(235, 0, 40, 0.1);
          border-radius: 4px;
        }

        .member-grade {
          display: block;
          color: #666;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .member-name {
          font-size: 1.8rem;
          margin-bottom: 0.2rem;
        }

        .member-en-name {
          color: #888;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .main-member {
            grid-column: span 1;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
