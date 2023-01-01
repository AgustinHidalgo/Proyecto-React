import {Link} from 'react-router-dom'
import CartWidget from './cartWidget';


const NavBar = () =>{
    return(
        <div className='navegacion'>
            <h1> <Link to='/'>Electro Shop </Link></h1>
            <span className='navStyle'><Link to='/categoria/10'>Procesadores</Link></span>
            <span className='navStyle'><Link to='/categoria/20'>Mouses </Link></span>
            <span className='navStyle'><Link to='/categoria/8'>Memorias Ram </Link></span>
            <span className='navStyle'><Link to='/categoria/66'>Placas de Video </Link></span>
            
            <span> <CartWidget /></span>
        </div>
    )
}

export default NavBar;