import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
import './home.css'; // Import your CSS file for styling
import ProfileImage from './pic.jpg'; // Adjust based on the image location

const Home = () => {
  return (
    <div>
     
      <div className="home">
        <header className="home-header">
          <img 
              src={ProfileImage} 
              alt="Profile" 
              className="home-image" 
          />
          <h2>W.A THENULA</h2>
          <h3>HANSAJA</h3>
        </header>
        <section className="home-content">
          <p className="s">Software Developer</p>
          <p className="s1">I am currently studying for my engineering degree at</p>
          <p className="s2">National Institute of Business Management.</p>
        </section>
      </div>
      <footer className="footer">
        <h2>Thenula Hansaja</h2>
        <div className="footer-social-icons">
          {/* Social Media Links */}
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
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

export default Home;
