import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer:{
        user:userReducer,
        tasks:taskReducer
    }
});

export default store;