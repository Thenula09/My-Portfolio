import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaHome } from 'react-icons/fa';
import './contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <div>
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

      {/* Main Contact Content */}
      <div className="contact-content">
        <h3 className="topic">Contact Me</h3>
        <div className="maill">
          <p className="contact-info">Contact Info</p>
          <p className="description">
  Need any assistance for your next project? <br />
  Struggling to fix your existing code issues? <br />
  Don't hesitate to contact me!
</p>
          <p>
            <FaEnvelope className="icon" /> Email: thenulahansaja12@gmail.com
          </p>
          <p>
            <FaPhoneAlt className="icon" /> Phone: +94 78 515 2303
          </p>
          <p>
            <FaHome className="icon" /> Address: Matar
          </p>
        </div>
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>

      {/* Footer Section */}
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

export default Contact;
