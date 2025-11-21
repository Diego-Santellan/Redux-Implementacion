import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, readProducts } from "../redux/productsSlice";

const ProductsList = () =>{

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const [newProductName, setNewProductName] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/products") //la ruta a nuestra DB la cual creamos con JSON-Server
            .then((res) => {
                console.log(res);
                dispatch(readProducts(res.data));
            }).catch((err) => {console.error(err)});//captura de errores

    },[dispatch]);

    // funcion para crear producto 
    const handleCreateProduct = () => { //se va a ejecutar cunado tenga algo
        if(newProductName){ //si la variable tinene algo entra
            const newProduct = { id: Date.now(), name: newProductName}; //destructuramos el producto para asignarle un ahi y nuevo nombre
            dispatch(createProduct(newProduct));

            axios
                .post("http://localhost:3001/products", newProduct) /* llamamos a la ruta y le pasamos el nuevo objeto  */
                .then(() =>{
                    setNewProductName("")
                })
                .catch((err) => { console.error(err)});
        }
    };
    const handleUpdateProduct = () => { };
    const handleDeleteProduct = () => { };

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
                <input 
                    type="text" 
                    value={newProductName} 
                    onChange={ e => setNewProductName(e.target.value)} 
                /> {/* lo seteamos cuando el usuario ejecute e evento onClick */}
                <button onClick={handleCreateProduct}>Agregar Producto</button>
            </aside>
        </>
    )
};

export default ProductsList;
