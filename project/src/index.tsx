import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mainPageProps from './state/main-page-props';
ReactDOM.render(
  <React.StrictMode>
    <App {...mainPageProps} />
  </React.StrictMode>,
  document.getElementById('root'));
