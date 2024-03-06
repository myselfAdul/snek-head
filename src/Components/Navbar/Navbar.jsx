import React, { useContext } from 'react'

import './Navbar.scss'

import logo from '../assets/logo1.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = ({}) => {

  const {getTotalCartProduct} = useContext(ShopContext)
  
  return (
    <div className='navbar'>
      
      <div className="nav-logo">
        <img src={logo} height='100px' alt="shop logo" />
        <p>SnekHead</p>
      </div>

      <ul className="nav-menu">
        <li><Link to='/'>Home</Link> <hr/> </li>
        <li><Link to='/regular' >Regular</Link> <hr/> </li>
        <li><Link to='/exclusive' >Exclusive</Link> <hr/></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'> <button>Login</button> </Link> 
        <Link to='/cart'> <img src={cart_icon} alt="cart icon" /> </Link> 
        <div className='cart-count'>{getTotalCartProduct()}</div>
      </div>
      
    </div>
  )
}

export default Navbar
