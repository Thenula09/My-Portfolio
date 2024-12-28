import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './DesktopNavigation.css';

const DesktopNavigation = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [activePage, setActivePage] = useState(''); // No default active page initially

  const menuItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'about', label: 'About', link: '/about' },
    { id: 'gallery', label: 'Gallery', link: '/gallery' },
    { id: 'project', label: 'Project', link: '/project' },
    { id: 'contact', label: 'Contact', link: '/contact' },
  ];

  const handleLogoClick = () => {
    setActivePage('home'); // Set active page to 'home'
    navigate('/'); // Navigate to the home page when the logo is clicked
  };

  return (
    <nav className="desktop-navbar">
      <div className="desktop-left">
        <h1 onClick={handleLogoClick} className="logo">Thenula Hansaja</h1>
      </div>
      <ul className="desktop-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className={`menu-item ${activePage === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior of the <a> tag
                setActivePage(item.id); // Update active page state
                navigate(item.link); // Navigate to the clicked page
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
