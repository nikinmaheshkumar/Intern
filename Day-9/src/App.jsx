import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {

  const [cart,setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart,product]);
  };

  return (
    <>
      <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product/:id' element={<ProductDetails addToCart={addToCart}/>} />
                <Route path='/cart' element={<Cart cart={cart}/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
    </>
  )
}

export default App
