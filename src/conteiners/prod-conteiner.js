import Producto from "../componentes/producto"
import {data} from "../utilidad/data"
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import customFetch from "../utilidad/customFetch";


const Productos = () =>{
    const [datos, setDatos] = useState([]);
    const { categoriaID } = useParams();

    console.log(categoriaID);

    useEffect(() => {
        customFetch(100, data)
            .then(result => {
                const productos = categoriaID ? result.filter(p => p.categoriaId === categoriaID) : result 
                setDatos(productos)})
            
            .catch((err => console.log(err)))
    }, [categoriaID ]);


    console.log("datos:", datos)
    return (
        <div className="contenedor-card">
            {
                datos.map(item => {
                return(
                <Producto
                    key={item.id}
                    id={item.id}
                    categoriaID ={item.categoriaId}
                    img= {item.img}
                    titulo= {item.titulo}
                    precio= {item.precio}
                    cantidad= {item.cantidad}
                    estado={item.estado} />
                    )
                })
            }
        
        </div>
    );
}

export default Productos