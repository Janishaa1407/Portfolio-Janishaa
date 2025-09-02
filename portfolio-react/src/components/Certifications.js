import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Best Student Recognition",
      description: "Premier Institution award for outstanding academic performance and leadership",
      category: "Academic Excellence",
      color: "#ffd700"
    },
    {
      icon: <FaMedal />,
      title: "Ideathon Participant",
      description: "Active participation in Coimbatore Institute of Technology's innovation challenge",
      category: "Innovation",
      color: "#c0c0c0"
    },
    {
      icon: <FaCertificate />,
      title: "ImageCon Academy",
      description: "Achieved top 30 position out of 10,000 participants in design competition",
      category: "Design",
      color: "#cd7f32"
    },
    {
      icon: <FaStar />,
      title: "Technical Fest Participation",
      description: "Multiple participations in technical fests and workshops across institutions",
      category: "Technical",
      color: "#ff6b6b"
    }
  ];

  const certifications = [
    {
      title: "Web Development Projects",
      items: ["THE FLORA", "ALL-IN-ONE CALCULATOR"],
      icon: "💻"
    },
    {
      title: "Android Development",
      items: ["Android Calculator App - Built in Android Studio"],
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      items: ["Festive Crackers Collection", "Bite Buddy App (Figma)"],
      icon: "🎨"
    },
    {
      title: "Data Analytics",
      items: ["Power BI - Data Scientist Salary Visualization Project"],
      icon: "📊"
    },
    {
      title: "Academic Projects",
      items: ["DAA Project Presentation - Optimization Assignment"],
      icon: "📚"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Certifications & Achievements</h2>
          <p>Recognition for my hard work and dedication</p>
        </motion.div>

        <motion.div
          className="achievements-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="achievement-category">{achievement.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Project Certifications & Skills</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <h4>{cert.title}</h4>
                <ul>
                  {cert.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="achievement-highlight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="highlight-content">
            <div className="highlight-icon">🏆</div>
            <div>
              <h3>Continuous Learning & Growth</h3>
              <p>
                I believe in constantly upgrading my skills and staying updated with the latest 
                technologies. Each certification and achievement represents a step forward in my 
                journey of becoming a better developer and designer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
