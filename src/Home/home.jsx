import React from "react";
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaReact, FaDatabase, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiFirebase, SiNodedotjs, SiMysql, SiReact } from "react-icons/si";
import ProfileImage from "./pic.jpg"; // Replace with your image path
import "./home.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      {/* Main Home Section */}
      <div className="home">
        <header className="home-header">
          <img src={ProfileImage} alt="Profile" className="home-image" />
          <h2 className="THENULAHANSAJA"> THENULA HANSAJA</h2>
          <h3 className="WANNIARACHCHI">WANNIARACHCHI</h3>
        </header>
        <section className="home-content">
          <p className="s">Software Developer</p>
          <p className="s1">I am currently studying for my engineering degree at</p>
          <p className="s2">National Institute of Business Management.</p>
        </section>

        {/* Technologies Section */}
        <div className="technologies-section">
         
          <div className="technologies-icons">
            {/* Each technology links to its official website or documentation */}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <FaHtml5 className="icon html-icon" />
              </div>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <FaCss3Alt className="icon css-icon" />
              </div>
            </a>
            <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <FaPhp className="icon php-icon" />
              </div>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <FaJs className="icon js-icon" />
              </div>
            </a>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <FaReact className="icon react-icon" />
              </div>
            </a>
            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <SiFirebase className="icon firebase-icon" />
              </div>
            </a>
            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <SiReact className="icon react-native-icon" />
              </div>
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <SiNodedotjs className="icon nodejs-icon" />
              </div>
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              <div className="technology-icon">
                <SiMysql className="icon mysql-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h2>Thenula Hansaja</h2>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
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
