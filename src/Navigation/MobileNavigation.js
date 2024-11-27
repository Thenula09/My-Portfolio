import React from 'react';
import './MobileNavigation.css';

const MobileNavigation = () => (
  <nav className="mobile-navbar">
    <h1>Thenula Hansaja</h1>
    <div className="mobile-menu">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/gallery">Gallery</a>
      <a href="/project">Project</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
);

export default MobileNavigation;
