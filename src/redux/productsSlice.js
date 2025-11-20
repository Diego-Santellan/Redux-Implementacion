import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice ({
    name: "products",
    initialState:{ //enves de que sea un array, decidimos que seria mejor un objeto para poder detallar mas informacion de serlo necesario
        data:[]
    },
    reducers:{/* funciones/logicas ---> hacemosun CRUD (Create, Read, Update, Delete) */
        createProduct :(state, action)=>{},
        readProducts :(state, action)=>{
            state.data = action.payload;
        },
        updateProduct :(state, action)=>{},
        deleteProduct :(state, action)=>{}
    },
});

export const { createProduct, readProducts, updateProduct, deleteProduct}  = productsSlice.actions; //exportamos las funcionalidades
export default productsSlice.reducer; //exportamos el reducer para que reduxtoolkit haga la convinacion