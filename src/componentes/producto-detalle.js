

const ProductoDetalle = ({ img, titulo, precio, descript, cantidad, estado}) =>{
    return(
        <div>
            <img src={img} alt="imagen producto" className="imagen-card"></img>
            <h2 className="titulo-card">{titulo}</h2>
            <p>{descript}</p>
            <h4 className="precio-card">{precio}</h4>
            <span>{cantidad}</span>
            <span>{estado}</span>
        
        </div>
    )
}
export default ProductoDetalle;