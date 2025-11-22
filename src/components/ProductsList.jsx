import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, readProducts, updateProduct } from "../redux/productsSlice";

const ProductsList = () =>{

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const [newProductName, setNewProductName] = useState("");
    // const [editProduct, setEditProduct] = useState(null);                       /* asi rompe --> como no me tomaba esto tambien surgieron otros cambios en el if de handleUpdateProduct*/
    // const [editProduct, setEditProduct] = useState({id:null, name:null});    /* asi no rompe */
    const [editProduct, setEditProduct] = useState({});                      /* asi no rompe */

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
    
    const handleUpdateProduct = () => {
        // if(editProduct){ /* de esta manera me podia modificar si llegaba algo vacio */
        if(editProduct.name != ""){
            dispatch(updateProduct({id: editProduct.id, name: editProduct.name}));

            axios /* acordar como usamos axios porque no nos enfocamos en el back pero de lo contrairo seria interacctuar con el back-end */
                .put(`http://localhost:3001/products/${editProduct.id}`, {name: editProduct.name} ) /* el segundo parametro es el campo que queremos modificar */
                .then(()=>setEditProduct({})) /* de esta manera si me anda, si pongo null adentro de los (), modifica pero luego al refrescar la vista se rompe */
                .catch((err) => { console.error(err)});

        }
    };

    const handleDeleteProduct = (id) => { 
      dispatch(deleteProduct(id));

      axios
        .delete(`http://localhost:3001/products/${id}`) /* no ponemos el metodo then() porque: se elimina, luego lo va a dectectar y actualiza*/
        .catch((err) => { console.error(err)});                     /* solo dejamos el catch para capturar en caso de haber algun tipo de error */
    };

    return(
        <>
            <h2>CRUD de Productos</h2>
            <h3>Lista de Productos</h3>
            <ul>
                {products.data.map( (product) => (
                    <li key={product.id}>
                        {editProduct.id == product.id ? ( /* si en la variable editProduct posee algun valor en el campo id, */
                            <div>                         {/*quiere decir que se oprimio el boton editar */}
                                <input                    /*y por lo tanto renderiza la vista con el imput para la edicion del producto */
                                    type="text" 
                                    value={editProduct.name} 
                                    onChange={ (e) => setEditProduct({ ...editProduct, id: product.id, name: e.target.value})}/>     
                                <button onClick={handleUpdateProduct}>Actualizar</button>
                            </div>

                        ) : (
                            <div>
                                <span>{product.name}</span>
                                <button onClick={() => setEditProduct(product)}>Editar</button>
                                <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                            </div>
                        )}

                        
                    </li>
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
