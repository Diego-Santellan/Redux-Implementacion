import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice ({
    name: "products",
    initialState:{ //enves de que sea un array, decidimos que seria mejor un objeto para poder detallar mas informacion de serlo necesario
        data:[],
    },
    reducers:{/* funciones/logicas ---> hacemosun CRUD (Create, Read, Update, Delete) */
        createProduct :(state, action)=>{
            state.data.push(action.payload);
        },

        readProducts :(state, action)=>{
            state.data = action.payload;
        },

        updateProduct :(state, action)=>{
            const {id, name} = action.payload;
            const product = state.data.find((product) => product.id === id); //buscamos el produto con el mismo id en el arreglo del objeto data
            if(product){
                product.name = name;//actulizamos el nombre del producto
            }
        },

        deleteProduct: (state, action)=>{
            const id = action.payload;
            // state.data = state.data.products.filter((product) => product.id !== id); /* filtramos en data para que no deje pasar al producto con ese id y como esta igualando es por eso que luego se elimina */
            state.data = state.data.filter((product) => product.id !== id); /* "state.data.products.filter" no va, ya que state.data ya es un array, según tu initialState*/
        },
    },
});

export const { createProduct, readProducts, updateProduct, deleteProduct}  = productsSlice.actions; //exportamos las funcionalidades
export default productsSlice.reducer; //exportamos el reducer para que reduxtoolkit haga la convinacion