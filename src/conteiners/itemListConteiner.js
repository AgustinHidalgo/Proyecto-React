import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utilidad/customFetch";
import ProductoDetalle from "../componentes/producto-detalle";
const { data } = require('../utilidad/data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === idItem))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ProductoDetalle item={dato} />
    );
}

export default ItemDetailContainer;