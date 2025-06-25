import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Fotter from './components/Fotter/Fotter';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      

      <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
       </Routes>
       <Fotter />

      </BrowserRouter>
    </div>
  );
}

export default App;
