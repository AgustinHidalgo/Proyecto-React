import { createContext, useState } from "react";


export const cartContext = createContext()


const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    

    const addToCart = (item,cant) =>{
        const repeat = cartList.find(p => p.id === item.id)
        if(repeat === undefined){
        setCartList([
            ...cartList,
            {
                id: item.id,
                titulo: item.titulo,
                precio: item.precio,
                img: item.img,
                cant: cant

            }
        ])
    }
        else{
            repeat.cant += cant
            setCartList([...cartList])
        }
    }
    
    
    
    const borrarProd = (id) =>{
        const render = cartList.filter(item => item.id !== id)
        setCartList(render)
    }

    
    
    const limpiarCarrito = () => {
        setCartList([]);
    }
    
    
    return(
        <cartContext.Provider value={{cartList, addToCart, borrarProd,limpiarCarrito}}>
            {children}

        </cartContext.Provider>
    )
}

export default CartContextProvider;
