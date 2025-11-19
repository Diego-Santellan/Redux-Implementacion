import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice"; //Acá no va con {} ya  que con default no  hay que hacer destructuracion

const store = configureStore({
    reducer: {
        users: usersReducer,  //objto que se va a traer
    },
});

export default store;