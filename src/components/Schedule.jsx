import React from 'react';
import { motion } from 'framer-motion';

const scheduleData = [
  { time: "14:30", event: "Door Open", description: "開場・受付" },
  { time: "15:00", event: "Opening Ceremony", description: "オープニングセッション" },
  { time: "15:15", event: "Session 1", description: "若き才能による3つのトーク" },
  { time: "16:15", event: "Coffee Break", description: "ネットワーキング & 休憩" },
  { time: "16:45", event: "Session 2", description: "未来を創るためのアイデア" },
  { time: "17:45", event: "Closing Room", description: "クロージング & 集合写真" }
];

const Schedule = () => {
  return (
    <section id="schedule" className="schedule section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Event <span className="highlight-red">Schedule</span></h2>
          <p className="section-subtitle">2026年5月の開催予定。時間は前後する可能性があります。</p>
        </motion.div>

        <div className="timeline">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="time">{item.time}</div>
              <div className="event-content">
                <h3>{item.event}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .schedule {
          background-color: var(--ted-dark-gray);
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: rgba(235, 0, 40, 0.2);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
          margin-bottom: 4rem;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: var(--ted-red);
          border-radius: 50%;
          z-index: 2;
          border: 4px solid var(--ted-dark-gray);
        }

        .time {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--ted-red);
          position: absolute;
          right: calc(50% + 30px);
          top: -10px;
        }

        .timeline-item:nth-child(even) .time {
          right: auto;
          left: calc(50% + 30px);
        }

        .event-content {
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border-radius: 12px;
          width: 80%;
          transition: var(--transition-smooth);
        }

        .event-content:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: scale(1.05);
        }

        .event-content h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .event-content p {
          color: #888;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-item {
            justify-content: flex-start;
            padding-left: 50px;
            padding-right: 0;
          }
          .timeline-item:nth-child(even) {
            padding-left: 50px;
          }
          .timeline-item::after {
            left: 20px;
          }
          .time {
            position: relative;
            left: 0 !important;
            right: auto !important;
            margin-bottom: 0.5rem;
            display: block;
          }
          .event-content {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Schedule;
