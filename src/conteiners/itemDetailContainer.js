import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {db} from "../utilidad/firebase"

import ProductoDetalle from "../componentes/itemDetail";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { productoID } = useParams();
    
    useEffect(() => {
        const fetchDetailFireston = async () =>{
            const get = doc(db, "productos", productoID)
            const getSnap = await getDoc(get)

            if(getSnap.exists()){
                return{
                    id: productoID,
                    ...getSnap.data()
                }
            }
            else{
                console.log("no existe ese documento")
            }

        }
        fetchDetailFireston()
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [productoID]);
    
    return (
        
        <ProductoDetalle item={dato}/>
    );
}

export default ItemDetailContainer;