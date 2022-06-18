import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state) => {
            state.currentUser = true;
        },
        logOut: (state) => {
            state.currentUser = false;
        },
        changeName: (state, action) => {
            state.displayName = action.payload;
        },
    },
});

export const { logIn, logOut, changeName } = userSlice.actions;

export default userSlice.reducer;