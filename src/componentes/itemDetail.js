import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./cartContext";
import ItemCount from "./itemCount";

const ProductoDetalle = ({item }) => {
    const{ img, titulo, precio, descript, cantidad, estado} = item;

    const[itemCount, setItemCount] = useState(0)
    const {addToCart} = useContext(cartContext)
    
    
    
    
    const onAdd = (cant) =>{
        if(cant > 0){
        alert("Se agregaron correctamente " + cant + " al carrito")
        setItemCount(cant)
        addToCart(item,cant)
        }
        else{
            
        }
        
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
                    <div className="stockCard">
                        <h4 className="precio-card"> ${precio}</h4>
                        <span>{cantidad} En stock</span>
                        
                    </div>
                    <br></br>
                    {
                        itemCount === 0
                        ?<ItemCount stock={item.cantidad} initial={itemCount} onAdd={onAdd}/>
                        :<Link to={"/carrito"}><button className="addButton">Ir al carrito</button></Link>
                    }
                </div>
                
            </div>
            
        </>
    )
            }
export default ProductoDetalle;