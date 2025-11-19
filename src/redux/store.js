import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice"; //Acá no va con {} ya  que con default no  hay que hacer destructuracion

const store = configureStore({
    reducer: {
        users: usersReducer,  //objto que estamos guardando
    },
});

export default store;