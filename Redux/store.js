import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './FavoriteSlice/FavoriteSlice'

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
    },
})