
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/FOOTER/Footer';



function App() {

  return (
    <div>
      <BrowserRouter> 
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/regular' element={<ShopCategory  category="regular"  />} />
        <Route path='/exclusive' element={<ShopCategory  category="exclusive" />} />
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>} />
        </Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignUp/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
