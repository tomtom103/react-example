import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Entry point for the application.
 * StrictMode is used to find bugs easier in the app, dont change it.
 */
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
