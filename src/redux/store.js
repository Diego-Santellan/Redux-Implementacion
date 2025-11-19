import { configureStore } from "@reduxjs/toolkit";
import {usersReducer} from "./usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,  //objto que se va a traer
    },
});

export default store;