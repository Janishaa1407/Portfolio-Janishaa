import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, 
  FaDatabase, FaMobile, FaChartBar, FaGit 
} from 'react-icons/fa';
import { SiAndroidstudio, SiPowerbi, SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: "Web Development",
      icon: <FaHtml5 />,
      technologies: ["HTML", "CSS", "JavaScript"],
      level: 80,
      color: "#e34f26"
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma />,
      technologies: ["Figma", "Design Principles"],
      level: 85,
      color: "#f24e1e"
    },
    {
      name: "Android Development",
      icon: <FaMobile />,
      technologies: ["Android Studio", "Mobile Apps"],
      level: 50,
      color: "#3ddc84"
    },
    {
      name: "Database Management",
      icon: <FaDatabase />,
      technologies: ["SQL", "MySQL", "MongoDB"],
      level: 70,
      color: "#336791"
    },
    {
      name: "Data Visualization",
      icon: <FaChartBar />,
      technologies: ["Power BI", "Data Analysis"],
      level: 65,
      color: "#f2c811"
    },
    {
      name: "Project Management",
      icon: <FaGit />,
      technologies: ["Git", "Team Collaboration"],
      level: 90,
      color: "#f05032"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Responsive Design"],
      icon: <FaHtml5 />
    },
    {
      title: "Design & Prototyping",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      icon: <FaFigma />
    },
    {
      title: "Data & Analytics",
      skills: ["SQL", "Power BI", "Data Visualization", "MongoDB"],
      icon: <FaChartBar />
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="skill-technologies">
                      {skill.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress">
                    <motion.div
                      className="skill-fill"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="skill-categories"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Skill Categories</h3>
            <div className="categories-grid">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="category-card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h4>{category.title}</h4>
                  <ul>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
