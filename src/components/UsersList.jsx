import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { fetchUsers } from "../redux/usersSlice";

const UsersList = () => {
    // el useSelector y useDispatch lo utilizamos para gestioar el estado de con react redux
    const users = useSelector((state) => state.users); //le pega a la data de los ususarios //state.users hace referenci al users que asignamos en el store
    const dispatch = useDispatch(); //despacha la accion de solicitar los datos 

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")//donde hacemos la peticion
            .then((res) => {
                console.log(res),
                dispatch(fetchUsers(res.data))//usammos la funcion fetchUsers que definimos previamente y le pasamos la data
            }) //respuesta
            .catch((err) => {console.error(err)});//captura de errores
    },[dispatch])//nos ayudamos de un useEffect porque las peticiones son asingronas. //El useEffect depende de una variable de estado pero nosotros vamos a usar dispatch que es quien se va a encargar de gestionar que accion se ejecuta dentro de reduxtoolkit


    return ( //Retornamos algo a la vista
        <>
            <h2>Lista de Usuarios:</h2>
            {console.log(users)} {/* imprime el estado de los datos */}
            <ul>
                {users.map((user) => 
                    (<li key={user.id}>{user.name}</li>))} {/* desstructuramos los objetos user */}
                <li>Usuarios</li>
            </ul>

        </>
    )
};

export default UsersList;