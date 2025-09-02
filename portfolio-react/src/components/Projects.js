import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "THE FLORA",
      description: "A responsive flower shop website featuring product listings and a clean, festive UI with modern design principles.",
      image: "🌺",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      github: "https://github.com/Janishaa1407/THE-FLORA",
      live: null,
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive system for managing patient records, appointments, and billing efficiently with database integration.",
      image: "🏥",
      technologies: ["SQL", "MySQL", "DBMS Concepts"],
      github: "https://github.com/Janishaa1407/HMS",
      live: null,
      category: "Database",
      icon: <FaDatabase />
    },
    {
      title: "ALL-IN-ONE CALCULATOR",
      description: "A versatile web application for performing arithmetic, percentage, square root calculations and more mathematical operations.",
      image: "🧮",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Janishaa1407/ALL-IN-ONE-CALC",
      live: null,
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Cultural Exchange Stories Platform",
      description: "A platform to share and explore cultural stories globally, promoting cross-cultural understanding and connection.",
      image: "🌍",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js", "Firebase"],
      github: null,
      live: null,
      category: "Web Development",
      icon: <FaCode />,
      status: "In Development"
    },
    {
      title: "Android Calculator App",
      description: "A fully functional calculator application built for Android devices with intuitive user interface.",
      image: "📱",
      technologies: ["Android Studio", "Java", "XML"],
      github: null,
      live: null,
      category: "Mobile Development",
      icon: <FaMobile />
    },
    {
      title: "Power BI Data Visualization",
      description: "Data Scientist Salary Visualization Project showcasing advanced data analysis and visualization techniques.",
      image: "📊",
      technologies: ["Power BI", "Data Analysis", "SQL"],
      github: null,
      live: null,
      category: "Data Analytics",
      icon: <FaDatabase />
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Showcasing my work and creativity</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-header">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-category">
                  <span className="category-icon">{project.icon}</span>
                  {project.category}
                </div>
                {project.status && (
                  <div className="project-status">
                    {project.status}
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="project-link disabled">
                      <FaCode />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Interested in working together?</h3>
          <p>Let's discuss your next project and bring your ideas to life!</p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
