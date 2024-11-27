import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Main CSS file for global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance measurement tool

// Initialize the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals(console.log);
