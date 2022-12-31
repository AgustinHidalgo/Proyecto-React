import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";


const Carrito = (item) => {
    const context = useContext(cartContext)
    const totalCart = context.cartList.reduce((prev,act)=> prev + act.cant * act.precio,0)
    
    return(
        <>
            <h1> Tus compras</h1>
            <ul>
            {   context.cartList.length === 0 
                ? <p>carrito vacio</p>
                : context.cartList.map(item => 
                <li key={item.id}> {item.titulo} X {item.cant}Precio por unidad: ${item.precio} 
                    <button onClick={() => context.borrarProd(item.id)}>borrar producto</button>
                    <p>Subtotal ${item.precio *item.cant}</p>
                </li> )
                
                
            }
            </ul>
            <p>Su total de la compra es: ${totalCart}</p>
            <Link to={"/"}><button>Volver al catalogo</button></Link>
            <button onClick={context.limpiarCarrito}>Vaciar el Carrito</button>
        </>
        
    )
}


export default Carrito;