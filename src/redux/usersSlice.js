import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({ //estructura de la porcion
    name: "users", //nombre
    initialState: [], //estado inicial
    reducers:{ //funciones que les queremos establecer
        fetchUsers: (state, action) =>{ //listado de los usuarios fetch(pedir)Users(usuarios)
            return action.payload;
        },
    },
});

export const {fetchUsers} = usersSlice.actions; 
export default usersSlice.reducer;