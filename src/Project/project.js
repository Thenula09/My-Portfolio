import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Removed FaDownload
import './project.css'; // Ensure you have a CSS file for styling
import portfolio from './1st.PNG'; // Profile image or any other image you'd like to include

const Project = () => {
  return (
    <div className="project-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Thenula Hansaja</h1>
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="project-content">
        <h2>Download My Portfolio</h2>
        {/* Image or button for downloading the portfolio */}
        <a href="path-to-portfolio.pdf" download className="download-link">
          <button className="download-button">Download Portfolio</button>
        </a>
      </div>

      {/* Portfolio Image - Clickable link to GitHub */}
      <a href="https://github.com/Thenula09?tab=packages" target="_blank" rel="noopener noreferrer">
        <img 
          src={portfolio} 
          alt="Portfolio Web" 
          className="portfolio" 
        />
      </a>
      <p className="A">My Portfolio Web</p>

      {/* Footer */}
      <footer className="footer">
        <h2>Thenula Hansaja</h2>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="mailto:example@email.com" className="social-icon"><FaEnvelope /></a>
        </div>
        <p>© 2024 Thenula Hansaja</p>
      </footer>
    </div>
  );
};

export default Project;
