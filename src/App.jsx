import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Project from './Project/project';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/project">Project</a>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
