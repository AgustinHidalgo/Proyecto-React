

const ProductoDetalle = ({id, img, titulo, precio, descript, cantidad, estado}) =>{
    return(
        <>
        <img src={img} alt="..." className="imagen-card"></img>
        <h2 className="titulo-card">{titulo}</h2>
        <p>{descript}</p>
        <h4 className="precio-card">{precio}</h4>
        <span>{cantidad}</span>
        <span>{estado}</span>
        </>
    )
}
export default ProductoDetalle;