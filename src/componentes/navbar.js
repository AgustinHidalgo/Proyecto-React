import { HiOutlineShoppingCart} from 'react-icons/hi'
import {Link} from 'react-router-dom'



const NavBar = () =>{
    return(
        <div className='navegacion'>
            <h1> <Link to='/'>Electro Shop </Link></h1>
            <span><Link to='/categoria/10'>Procesadores</Link></span>
            <span><Link to='/categoria/20'>Mouses </Link></span>
            <span><Link to='/categoria/8'>Memorias Ram </Link></span>
            <span>Logeate</span>
            <span className='icon'> < HiOutlineShoppingCart /> </span>
        </div>
    )
}

export default NavBar;