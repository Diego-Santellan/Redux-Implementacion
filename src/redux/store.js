import { configureStore } from "@reduxjs/toolkit";

let userReducer ={};

const store = configureStore({
    reducer: {
        data: {
            users: userReducer,  //objto que se va a traer
        },
    },
});

export default store;