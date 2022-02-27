import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import routes from './routes/routes';
import mainPageProps from './state/main-page-props';
import App from './components/app/app';
import Login from './pages/login/login';
import NotFound from './pages/not-found/not-found';
import MyList from './pages/my-list/my-list';
import Movie from './pages/movie/movie';
import AddReview from './pages/add-review/add-review';
import Player from './pages/player';
import PrivateRoute from './components/private/private';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App {...mainPageProps} />} />
        <Route path={routes.login.path} element={<Login/>} />
        <Route path={routes.myList.path} element={<PrivateRoute><MyList/></PrivateRoute>} />
        <Route path={routes.movie.name} >
          <Route path={routes.movie.path} element={<Movie/>} />
          <Route path={routes.review.path} element={<AddReview/>} />
        </Route>
        <Route path={routes.player.path} element={<Player/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
