import { useEffect, useState } from 'react';
const ItemCount = ({initial = 0,}) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        setCount (count + 1)
        
    }
    
    const decrement = () => {
        if(count > initial){
            setCount(count - 1);

        }
    }
    
    
    const AddToCart = () =>{
        if(count > initial){
        alert("se añadio al carrito")
        setCount(0)
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    return(
        <div className="itemCountDiv">
            <button onClick={increment}> + </button>
            <p>{count}</p>
            <button onClick={decrement}> - </button>
            <button onClick={AddToCart}> Añadir al Carrito </button> 
            
            {/* {
                count > initial
                : console.log("eso todavia no es posible")

            } */}
        </div>
    )
}

export default ItemCount;