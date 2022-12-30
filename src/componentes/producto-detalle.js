import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";

const ProductoDetalle = ({item }) => {
    const{ img, titulo, precio, descript, cantidad, estado} = item;

    const[itemCount, setItemCount] = useState(0)
    
    
    
    
    
    const onAdd = (cant) =>{
        alert("Se agregaron correctamente " + cant + " al carrito")
        setItemCount(cant)
    }
    
    return(
        <>
            <div className="productoDetalle">
                <div className="fotoDetalle">
                    <img src={img} alt="imagen producto" className="imagen-card"></img>
                </div>
                <div className="cuerpoDetalle">
                    <h2 className="titulo-card-detalle">{titulo}</h2>
                    <p>{descript}</p>
                    <h4 className="precio-card">{precio}</h4>
                    <span>{cantidad}</span>
                    <span>{estado}</span>
                    <br></br>
                    <button className="boton-card-detalle">Comprar</button>
                </div>
                
            </div>
            {
                itemCount === 0
                ?<ItemCount stock={item.cantidad} initial={itemCount} onAdd={onAdd}/>
                :<Link to={"/carrito"}><button>Ir al carrito</button></Link>
            }
        </>
    )
            }
export default ProductoDetalle;