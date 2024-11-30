import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MobileNavigation.css";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="mobile-nav-container">
      <div className="mobile-header">
        <h1>Thenula Hansaja</h1>
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/media">Media</a>
          <a href="/gallery">Gallery</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
 )}
 </div>
);
};

export default MobileNavigation;
