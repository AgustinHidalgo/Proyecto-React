import { useContext } from 'react'
import { HiOutlineShoppingCart} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { cartContext } from './cartContext'


const CartWidget = () =>{
    const context = useContext(cartContext)
    return(
        <>
            <Link to={"/carrito"}><span className='icon'> < HiOutlineShoppingCart /></span></Link>
            <span className='cantCart'>{context.cartList.length}</span>
        </>
    )
}


export default CartWidget;