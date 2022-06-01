import { configureStore } from "@reduxjs/toolkit";
import listReducer from '../features/list/listSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        list: listReducer,
        modal: modalReducer,
    },
});