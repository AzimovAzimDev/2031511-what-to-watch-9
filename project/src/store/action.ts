import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction('movies/setGenre',
  (key = '') => ({payload: key}));
