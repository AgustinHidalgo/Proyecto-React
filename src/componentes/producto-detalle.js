

const ProductoDetalle = ({item }) => {
    const{ img, titulo, precio, descript, cantidad, estado} = item;
    return(
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
    )
}
export default ProductoDetalle;