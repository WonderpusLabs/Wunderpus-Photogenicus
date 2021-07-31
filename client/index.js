import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import styles from './stylesheets/styles.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);