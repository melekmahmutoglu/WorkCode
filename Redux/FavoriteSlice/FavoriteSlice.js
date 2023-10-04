import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteList: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteList.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload)
        },

    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer