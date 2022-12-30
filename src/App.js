import './App.css';
import Productos from './conteiners/prod-conteiner';
import NavBar from './componentes/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './conteiners/itemListConteiner';
import Carrito from './componentes/cart';


function App() {
  return (
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route  path ="/" element={<Productos />}/> 
      <Route  path ="/categoria/:categoriaID" element={<Productos />}/> 
      <Route  path ="/producto/:productoID" element={<ItemDetailContainer />}/>
      <Route  path ="/carrito" element={<Carrito />}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
