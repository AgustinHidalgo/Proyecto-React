import Producto from "../componentes/producto"
import {data} from "../utilidad/data"

const Productos = () =>{
    
    return (
        <>
        {
            data.map(item => {
                return(
                <Producto
                    key={item.id}
                    img= {item.img}
                    titulo= {item.titulo}
                    precio= {item.precio}
                    cantidad= {item.cantidad}
                    estado={item.estado} />
                    )})
                
            }
        
        </>
    );
}

export default Productos