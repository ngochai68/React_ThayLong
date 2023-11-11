// src/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { apiSlice } from './api/apiSlice'; // import api slice

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer, // thêm reducer từ api slice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
