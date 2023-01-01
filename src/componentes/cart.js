import { async } from "@firebase/util";
import { collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../utilidad/firebase"
import {BsFillBookmarkCheckFill} from 'react-icons/bs'


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
        <div className="divCart">
            <h2 className="h2Cart"> Tus compras</h2>
            <ul>
            {   context.cartList.length === 0 
                ? <p>carrito vacio</p>
                : context.cartList.map(item => 
                        <div key={item.id} className="divProdCart"><span className="iconDoneCart"><BsFillBookmarkCheckFill /></span> 
                    <div className="cartConten">
                        {item.titulo} <br></br>Cantidad {item.cant}<br></br>Precio por unidad: ${item.precio}
                    </div>
                
                    <button onClick={() => context.borrarProd(item.id)} className="deleteButton">borrar producto</button>
                    <p>Subtotal ${item.precio *item.cant}</p>
                </div> )
                
                
            }
            </ul>
            <br></br>
                <p>Su total de la compra es: ${totalCart}</p>
            <div className="divButton">
                <Link to={"/"}><button className="catButton">Volver al catalogo</button></Link>
                <button onClick={context.limpiarCarrito} className="catButton">Vaciar el Carrito</button>
                <button onClick={orderEnd} className="catButton">Terminar mi compra </button>
            </div>
        </div>
        
    )
}


export default Carrito;