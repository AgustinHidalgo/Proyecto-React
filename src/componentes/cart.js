import { Link } from "react-router-dom";

const Carrito = () => {
    return(
        <>
            <h1> Tus compras</h1>
            <Link to={"/"}><button>Volver al catalogo</button></Link>
        </>
    )
}


export default Carrito;