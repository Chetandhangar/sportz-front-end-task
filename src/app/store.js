import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/Players/playerSlice';

export const store = configureStore({
  reducer: {
    player : playerReducer
  },
});
