import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utilidad/customFetch";
import ProductoDetalle from "../componentes/producto-detalle";
const { data } = require('../utilidad/data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { productoID } = useParams();
    
    useEffect(() => {
        customFetch(100, data.find(item => item.id === productoID))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [productoID]);
    
    return (
        
        <ProductoDetalle item={dato}/>
    );
}

export default ItemDetailContainer;