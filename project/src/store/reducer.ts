import {createReducer} from '@reduxjs/toolkit';
import {setGenre} from 'store/action';
import movies from 'mocks/movies';

const initialState = {
  genre: 'all_genres',
  movies,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};
