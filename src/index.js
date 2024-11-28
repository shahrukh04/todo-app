import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure Tailwind and other global styles are here
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want Firebase or other global initialization, ensure it's done here
// For example, importing Firebase initialization:
// import './firebase'; // Ensure this is done in a separate firebase config file if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
