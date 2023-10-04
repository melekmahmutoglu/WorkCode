import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './FavoriteSlice/FavoriteSlice'
import submitReducer from './SubmitSlice/SubmitSlice';

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        submit: submitReducer,

    },
})