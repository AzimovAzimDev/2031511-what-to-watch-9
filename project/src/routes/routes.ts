/**
 * Домашняя старница
 */
export const home = {
  path:'/',
};

/**
 * Страница авторизации
 */
export const login = {
  name: 'login',
  path: '/login',
};

/**
 * Старница с списком фильмов пользвателя
 */
export const myList = {
  name: 'mylist',
  path: '/mylist',
};

/**
 * Страница фильма
 */
export const movie = {
  name: 'movie',
  path: '/movie/:id',
  buildRoute:(id: number | string): string => `/movie/${id}`,
};


/**
 * Страница для оценки фильма
 */
export const review = {
  name: 'review',
  path: '/movie/:id/review',
  buildRoute:(id: number | string): string => `/movie/${id}/review`,
};

/**
 * Страница для проишрывателя фильма
 */
export const player = {
  name: 'player',
  path: '/player/:id',
  buildRoute:(id: number | string): string => `/player/${id}`,
};


/**
 * Станицы приложения
 */
export default {
  home,
  login,
  myList,
  movie,
  review,
  player,
};
