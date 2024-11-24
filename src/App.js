import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Project from './Project/project';



const App = () => {
  return (
    <Router>
 
      <Routes>
      <Route path="/" element={<Home />} /> {/* Root path maps to Home */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Project" element={<Project />} />

      </Routes>
    </Router>
  );
};

export default App;
