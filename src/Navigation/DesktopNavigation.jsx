import React from 'react';
import './DesktopNavigation.css';

const DesktopNavigation = () => (
  <nav className="desktop-navbar">
    <div className="desktop-left">
      <h1>Thenula Hansaja</h1>
    </div>
    <ul className="desktop-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/project">Project</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
);

export default DesktopNavigation;
