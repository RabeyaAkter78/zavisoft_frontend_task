// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi';
import { productsSlice } from './feature/products/productsSlice';
// import other slices if needed

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// types for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;