import React from 'react';
import { Provider } from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import mainPageProps from '../../state/main-page-props';
import routes from '../../routes/routes';
import Home from '../../pages/home/home';
import Login from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import Movie from '../../pages/movie/movie';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private/private';
import {MoviePageProps} from '../../types/MoviePage';
import { store } from 'store/index';

function App(props: MoviePageProps): JSX.Element {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Home {...mainPageProps} list={props.list} />} />
        <Route path={routes.login.path} element={<Login/>} />
        <Route path={routes.myList.path} element={<PrivateRoute><MyList/></PrivateRoute>} />
        <Route path={routes.movie.name} >
          <Route path={routes.movie.path} element={<Movie/>} />
          <Route path={routes.review.path} element={<AddReview/>} />
        </Route>
        <Route path={routes.player.path} element={<Player/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Provider>
  );
}

export default App;
