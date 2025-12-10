import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaChartBar } from 'react-icons/fa';
import './Projects.css';

// Project images from public folder
const floraImage = '/assets/flora.jpg';
const hmsImage = '/assets/hms.jpg';
const calculatorImage = '/assets/Calculator.jpg';
const solarSystemImage = '/assets/Solar%20System.jpg';
const powerBIImage = '/assets/Power%20BI.jpg';

const Projects = () => {
  const [imageErrors, setImageErrors] = React.useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: "THE FLORA",
      description: "A responsive flower shop website featuring product listings and a clean, festive UI with modern design principles.",
      image: floraImage,
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      github: "https://github.com/Janishaa1407/THE-FLORA",
      live: null,
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive system for managing patient records, appointments, and billing efficiently with database integration.",
      image: hmsImage,
      technologies: ["SQL", "MySQL", "DBMS Concepts"],
      github: "https://github.com/Janishaa1407/HMS",
      live: null,
      category: "Database",
      icon: <FaDatabase />
    },
    {
      title: "ALL-IN-ONE CALCULATOR",
      description: "A versatile web application for performing arithmetic, percentage, square root calculations and more mathematical operations.",
      image: calculatorImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Janishaa1407/ALL-IN-ONE-CALC",
      live: null,
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Solar System",
      description: "An interactive 3D model of our solar system with information about each planet and their orbits.",
      image: solarSystemImage,
      technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
      github: "https://github.com/Janishaa1407/Solar-System",
      live: null,
      category: "Web Development",
      icon: <FaCode />
    },
    {
      title: "Power BI Dashboard",
      description: "Interactive data visualization dashboard created with Microsoft Power BI for business analytics.",
      image: powerBIImage,
      technologies: ["Power BI", "Data Visualization", "DAX", "SQL"],
      github: "https://github.com/Janishaa1407/PowerBI-Dashboard",
      live: null,
      category: "Data Analytics",
      icon: <FaChartBar />
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
                  {imageErrors[index] ? (
                    <span className="project-emoji">{project.icon}</span>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image-preview"
                      onError={() => handleImageError(index)}
                    />
                  )}
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
