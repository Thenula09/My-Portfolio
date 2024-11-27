import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import MobileNavigation from './Navigation/MobileNavigation';
import DesktopNavigation from './Navigation/DesktopNavigation';

import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Project from './Project/project';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Router>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
