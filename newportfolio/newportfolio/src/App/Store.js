import { configureStore } from '@reduxjs/toolkit';
import reducer from '../Redux/todoslice'

export const store = configureStore({
    reducer: {
      todo: reducer,
    },
  });