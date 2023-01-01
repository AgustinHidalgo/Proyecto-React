import { useEffect, useState } from 'react';
const ItemCount = ({ stock, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    let increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className='itemCountDiv'>
            <button onClick={increment} className="itemCountButton">+</button>
            <p>{count}</p>
            <button onClick={decrement} className="itemCountButton">-</button>
            
            {
                stock
                ? <p><button onClick={() => onAdd(count)} className="addButton">Agregar al carrito</button></p>
                : <p><button>Agregar al carrito</button></p>
            }
        </div>
    );
}

export default ItemCount;