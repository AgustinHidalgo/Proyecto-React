import Producto from "../componentes/producto"
import {data} from "../utilidad/data"

const Productos = () =>{
    
    return (
        <>
        {
            data.map(item => {
                <Producto
                    key={item.id}
                    
                    titulo= {item.titulo}
                    precio= {item.precio}
                    cantidad= {item.cantidad}
                    estado={item.estado} />
                    })
                
            }
        
        </>
    );
}

export default Productos