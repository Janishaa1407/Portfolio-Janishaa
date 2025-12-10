import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaHeart, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap />, number: "3rd", text: "Year B.Tech IT" },
    { icon: <FaTrophy />, number: "Best", text: "Student Award" },
    { icon: <FaHeart />, number: "10+", text: "Projects Completed" },
    { icon: <FaRocket />, number: "5+", text: "Technologies" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Hi, I'm <span className="highlight">Janishaa 👋</span></h3>
            <p>
              I am a passionate and driven B.Tech Information Technology student, currently in the third year. 
              Recognized as a best student, I have actively participated in ideathons and tech fests, earning 
              certifications from ImageCon Academy and Coimbatore Institute of Technology.
            </p>
            <p>
              I'm skilled in web development, SQL, PowerBI, and UI/UX tools like Figma and Android Studio. 
              I'm working on exciting projects like cultural exchange stories, mobile apps, and web tools 
              like THE FLORA and ALL-IN-ONE CALCULATOR. Beyond tech, I'm a self-care enthusiast and a 
              personal growth lover!
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Goal-Oriented</h4>
                  <p>Focused on achieving excellence in every project</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Fast Learner</h4>
                  <p>Quickly adapt to new technologies and frameworks</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Team Player</h4>
                  <p>Excellent collaboration and communication skills</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="about-image-container">
              <div className="about-image">
                <img src="/assets/Janishaa.jpg" alt="Janishaa" />
              </div>
              <div className="image-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-text">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
