import { HiOutlineShoppingCart} from 'react-icons/hi'




const NavBar = () =>{
    return(
        <div className='navegacion'>
            <h1>Electro Shop</h1>
            <span>Procesadores</span>
            <span>Placas de Video</span>
            <span>Memorias Ram</span>
            <span>Logeate</span>
            <span className='icon'> < HiOutlineShoppingCart /> </span>
        </div>
    )
}

export default NavBar;