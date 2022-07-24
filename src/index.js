import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './globalStyles.jsx';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();
