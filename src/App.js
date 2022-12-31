import './App.css';
import Productos from './conteiners/itemListConteiner';
import NavBar from './componentes/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './conteiners/itemDetailContainer';
import Carrito from './componentes/cart';
import CartContextProvider from './componentes/cartContext';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route  path ="/" element={<Productos />}/> 
      <Route  path ="/categoria/:categoriaID" element={<Productos />}/> 
      <Route  path ="/producto/:productoID" element={<ItemDetailContainer />}/>
      <Route  path ="/carrito" element={<Carrito />}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
