import { configureStore } from "@reduxjs/toolkit";
import listReducer from '../features/list/listSlice';
import modalReducer from '../features/modal/modalSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        list: listReducer,
        modal: modalReducer,
        user: userReducer,
    },
});

export const dispatch = store.dispatch;