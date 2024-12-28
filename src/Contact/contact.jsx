import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaHome } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Form Data:", formData); // Form data check
  
    // EmailJS API call
    emailjs.sendForm(
      'service_t144yoo',
      'template_1k09suq',
      e.target,
      '5ioSd8UwcxvD81Fxg'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again!');
    });
  };

  return (
    <div>
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
            <FaEnvelope className="icon email-icon" /> Email: thenulahansaja12@gmail.com
          </p>
          <p>
            <FaPhoneAlt className="icon phone-icon" /> Phone: +94 78 515 2303
          </p>
          <p>
            <FaHome className="icon home-icon" /> Address: Matar
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>

      {/* Footer Section */}
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
