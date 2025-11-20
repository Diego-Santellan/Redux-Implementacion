import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice"; //Acá no va con {} ya  que con default no  hay que hacer destructuracion
import productsReducer from "./productsSlice"; //aca tampoco

const store = configureStore({

    reducer: {//objtos que estamos guardando
        
        users: usersReducer,  
        products: productsReducer, 
    },
});

export default store;