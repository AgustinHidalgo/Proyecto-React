import { Link } from "react-router-dom";


const Producto = ({id, img, titulo, precio, descript, cantidad, estado}) =>{
    return(
        
            <div className="card">
                <img src={img} alt="..." className="imagen-card" />
                <h2 className="titulo-card">{titulo}</h2>
                <p>{descript}</p>
                <h4 className="precio-card"> $ {precio}</h4>
                <div className="conteiner-compra">
                    <button className="boton-card">Comprar</button>
                    <Link to={`/producto/${id}`}><button className="boton-card">Ver Mas</button></Link>
                    <span>{cantidad}</span>
                    <span>{estado}</span>
                </div>
            
            
            </div>
        
    )
}

export default Producto;