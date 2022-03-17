import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import mainPageProps from './state/main-page-props';
import movies from './mocks/movies';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...mainPageProps} list={movies}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
