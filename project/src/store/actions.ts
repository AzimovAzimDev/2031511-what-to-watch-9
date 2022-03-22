import {createAction} from '@reduxjs/toolkit';

/**
 * @property SET_GENRE - название действия для устанвки жанра в фильтре
 */
export enum Actions {
  SET_GENRE = 'SET_GENRE',
}

/**
 * Устанавливаем жанр для фильтра
 */
export const setGenre = createAction(
  Actions.SET_GENRE,
  (key = '') => ({payload: key}),
);
