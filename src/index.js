import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// styles vvv
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

// scripts vvv
import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);