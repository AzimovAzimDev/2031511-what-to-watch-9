import {createReducer} from '@reduxjs/toolkit';
import {setGenre} from './actions';
import initialState from './state';

export default createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  });
});
