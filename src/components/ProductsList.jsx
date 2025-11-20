import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readProducts } from "../redux/productsSlice";

const ProductsList = () =>{

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("http://localhost:3001/products") //la ruta a nuestra DB la cual creamos con JSON-Server
            .then((res) => {
                console.log(res);
                dispatch(readProducts(res.data));
            }).catch((err) => {console.error(err)});//captura de errores

    },[dispatch])

    return(
        <>
            <h2>CRUD de Productos</h2>
            <h3>Lista de Productos</h3>
            <ul>
                {products.data.map( (product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <aside>
                <input type="text" />
                <button>Agregar Producto</button>
            </aside>
        </>
    )
};

export default ProductsList;
