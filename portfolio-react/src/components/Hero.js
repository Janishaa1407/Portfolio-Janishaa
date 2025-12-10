import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              Hello, I'm <span className="highlight">Janishaa 👩‍💻</span>
            </h1>
            <h2>Tech Enthusiast & Web Developer</h2>
            <p>
              B.Tech IT Student | Web Developer & Designer | UI/UX Enthusiast
            </p>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly digital experiences.
              Currently pursuing my B.Tech in Information Technology with a focus on web development
              and modern technologies.
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>
            </Link>
            <a 
              href="/assets/RESUME JANISHAA (2).pdf" 
              download 
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://github.com/Janishaa1407" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/janishaav1407" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:vjanishaa@gmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-image-container">
            <div className="hero-image">
              <img src="/assets/Janishaa.jpg" alt="Janishaa" />
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">💻</div>
              <div className="floating-element element-2">🎨</div>
              <div className="floating-element element-3">🚀</div>
              <div className="floating-element element-4">✨</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
