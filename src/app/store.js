import { configureStore } from '@reduxjs/toolkit';
import { TMDBAPI } from '../services/Api';




export const store = configureStore({
    reducer: {
        [TMDBAPI.reducerPath]: TMDBAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(TMDBAPI.middleware),
})


