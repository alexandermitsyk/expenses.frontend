import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './expensesSlice';
import authenticationSlice from './authenticationSlice';
import statisticsSlice from './statisticsSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';

export const store = configureStore({
    reducer: {
        authenticationSlice: authenticationSlice,
        expensesSlice: expensesSlice,
        statisticsSlice: statisticsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});
