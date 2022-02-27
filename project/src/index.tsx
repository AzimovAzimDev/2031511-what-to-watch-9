import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './components/app/app';
import Login from './pages/login/login';
import NotFound from './pages/not-found/not-found';
import mainPageProps from './state/main-page-props';
import MyList from './pages/my-list/my-list';
import Movie from './pages/movie/movie';
import AddReview from './pages/add-review/add-review';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App {...mainPageProps} />} />
        <Route path="login" element={<Login/>} />
        <Route path="mylist" element={<MyList/>} />
        <Route path="films">
          <Route path=":id" element={<Movie/>} />
          <Route path=":id/review" element={<AddReview/>} />
        </Route>
        {/*<Route path="player/:id" />*/}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
