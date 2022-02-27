import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import mainPageProps from './state/main-page-props';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...mainPageProps}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
