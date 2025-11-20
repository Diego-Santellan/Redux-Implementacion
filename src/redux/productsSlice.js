import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice ({
    name: "products",
    initialState:[],
    reducers:{/* funciones/logicas ---> hacemosun CRUD (Create, Read, Update, Delete) */
        createProduct :(state, action)=>{},
        readProduct :(state, action)=>{},
        updateProduct :(state, action)=>{},
        deleteProduct :(state, action)=>{}
    },
});

export const { createProduct, readProduct, updateProduct, deleteProduct}  = productsSlice.actions; //exportamos las funcionalidades
export default productsSlice.reducer; //exportamos el reducer para que reduxtoolkit haga la convinacion