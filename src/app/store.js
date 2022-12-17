import { configureStore } from '@reduxjs/toolkit';
import busStopReducer from '../slices/busStopSlice';

export const store = configureStore({
  reducer: {
    busStop: busStopReducer,
  },
});
