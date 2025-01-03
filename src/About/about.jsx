import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './about.css'; // Import About page CSS
import AboutImage from './ab.jpg'; // Import the image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <img src={AboutImage} alt="About Me" className="about-image" />
        <p className="p1">Hello! I'm Thenula Hansaja Wanniarchchi.</p>
        <p className="p2">
          In 2023, I began my journey in higher education and am currently pursuing an undergraduate Software Engineer degree at the National Institute of Business Management (NIBM), specializing in engineering. I have a strong desire to learn about new things, particularly in the field of engineering, and I am eager to expand my knowledge and skills in this area.
        </p>
        <p className="p3">
          I am actively exploring various engineering topics and continuously striving to grow in my field. You can find me on GitHub under the username 
          <a 
            href="https://github.com/Thenula09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            {" "}Thenula09
          </a>, where I share my projects and work. On LinkedIn, you can search for me by the name 
          <a 
            href="https://www.linkedin.com/in/thenula-hansaja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            {" "}Thenula Hansaja
          </a> to connect and explore my professional journey.
        </p>
        
        {/* More Info Link */}
        <div className="more-info">
          <a href="your-link.html" className="more-info-link">
            Want to know more? 
            <span className="arrow-icon">➔</span>
          </a>
        </div>

        {/* My CV Section */}
        <div className="cv-section">
          <a 
            href="/path-to-your-cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-link"
          >
            <FaFileAlt className="cv-icon" /> My CV
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h2>Thenula Hansaja</h2>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/thenula-hansaja" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
        <p>© 2024 Thenula Hansaja</p>
      </footer>
    </div>
  );
};

export default About;
