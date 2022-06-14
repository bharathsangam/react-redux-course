import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState: {color:""},
    reducers:{
        changeTextColor:(state, action)=>{
            state.color = action.payload
        },
        
    },
});

export const {changeTextColor} = themeSlice.actions;

export default themeSlice.reducer;