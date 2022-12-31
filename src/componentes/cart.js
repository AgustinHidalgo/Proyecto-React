import { async } from "@firebase/util";
import { collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../utilidad/firebase"


const Carrito = (item) => {
    const context = useContext(cartContext)
    const totalCart = context.cartList.reduce((prev,act)=> prev + act.cant * act.precio,0)
    
    const orderEnd = () =>{
        const order = {
            comprador:{
                nombre: "martin palermo",
                correo: "martinpalermocabj@gmail.com",
                cel: 34981246
            },
            date: serverTimestamp(),
            compra: context.cartList.map(item =>({
                id: item.id,
                title: item.titulo,
                cantidad: item.cant,
                precio: item.precio
            })),
            total: totalCart
        }
        
        
        const createOrder =  async() =>{
            const orderRef = doc(collection(db, "orders"))
            await setDoc(orderRef, order);
            return orderRef
        }
        createOrder()
        .then(result => {console.log("Tu compra se creo con exito!!")
        context.limpiarCarrito()
        })
        .catch(err => console.log("err"))

        
    }
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
            <button onClick={orderEnd}>Terminar mi compra </button>
        </>
        
    )
}


export default Carrito;