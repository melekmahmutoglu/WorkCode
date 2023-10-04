import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    submitList: [],
}

export const submitSlice = createSlice({
    name: 'submit',
    initialState,
    reducers: {
        addSubmit: (state, action) => {
            state.submitList.push(action.payload);
        }
    }
})

export const { addSubmit } = submitSlice.actions;

export default submitSlice.reducer;