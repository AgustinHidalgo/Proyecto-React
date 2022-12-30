import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";


const Carrito = () => {
    const context = useContext(cartContext)

    
    return(
        <>
            <h1> Tus compras</h1>
            <ul>
            {   context.cartList.length === 0 
                ? <p>carrito vacio</p>
                : context.cartList.map(item => <li key={item.id}> {item.titulo} X {item.cant} ${item.precio}<button onClick={() => context.borrarProd(item.id)}>borrar producto</button></li> )
                
                
            }
            </ul>
            <Link to={"/"}><button>Volver al catalogo</button></Link>
            <button onClick={context.limpiarCarrito}>Vaciar el Carrito</button>
        </>
        
    )
}


export default Carrito;