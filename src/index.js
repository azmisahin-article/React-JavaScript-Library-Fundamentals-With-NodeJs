/**
 * @file index
 */

// other modules on which the component depends.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// displays the react root in the DOM node
root.render(
  // a tool used to highlight potential problems in an application
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);