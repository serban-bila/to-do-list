import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: [],
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addActivity: (state, action ) => {
            let activity = action.payload;

            state.toDoList.push({title: activity, isChecked: false });
        },
        check: (state, action) => {
            const listItem= state.toDoList.filter((item) => 
            item.title === action.payload)
            listItem.map((e) => e.isChecked = true);
        },
        unCheck: (state, action) => {
            const listItem= state.toDoList.filter((item) => 
            item.title === action.payload)
            listItem.map((e) => e.isChecked = false);
        },
        clearList: (state) => {
            state.toDoList = [];
        },
        deleteListItem: (state, action) => {
            const listItems = state.toDoList.filter((item) => 
            item.title !== action.payload)
            state.toDoList = listItems;
        },
    },
});

export const { addActivity, check, unCheck, clearList, deleteListItem } = listSlice.actions;

export default listSlice.reducer;