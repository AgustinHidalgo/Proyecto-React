import Producto from "../componentes/item"
import {db} from "../utilidad/firebase"
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";


const Productos = () =>{
    const [datos, setDatos] = useState([]);
    const { categoriaID } = useParams();

    console.log(categoriaID);

    useEffect(() => {
        const fetchFirestone = async () => {
                let q
                if(categoriaID){
                    q = query(collection(db, "productos"), where("categoriaId", "==", categoriaID))

            }
                else{
                    q = query(collection(db, "productos"), orderBy("precio", "asc"))
                    console.log("funciona")

                }
            
            
            
                const querySnapshot = await getDocs(q);
                const dataFirestone = querySnapshot.docs.map(item =>({
                    id: item.id,
                    ...item.data()
                }))
                    return dataFirestone
        }
        fetchFirestone()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [categoriaID]);


    
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
                    precio=  {item.precio}
                    cantidad= {item.cantidad}
                    estado={item.estado} />
                    )
                })
            }
        
        </div>
    );
}

export default Productos