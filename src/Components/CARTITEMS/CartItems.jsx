import React, { useContext } from 'react';
import './CartItems.scss';
import remove_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const shippingFee = 5;

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = getTotalCartAmount();

  // Calculate total with shipping fee if subtotal is greater than 0
  const total = subtotal > 0 ? subtotal + shippingFee : subtotal;

  return (
    <div className='cart-items'>
      <div className="cart-items-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="cart-items-format cart-items-main">
                <img className='cart-product-image' src={item.image} alt="Product Image" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className='cart-items-quantity'>{cartItems[item.id]}</button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img className='cart-items-remove-icon' onClick={() => { removeFromCart(item.id)}} src={remove_icon} alt="Remove Icon" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-item-final">
        <div className='cart-total'>
          <h1>Cart Total</h1>
          <div>
            <div className="cart-total-items">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            {subtotal > 0 && (
              <>
                <hr />
                <div className="cart-total-items">
                  <p>Shipping Fee</p>
                  <p>${shippingFee}</p>
                </div>
              </>
            )}
            <hr />
            <div className="cart-total-items">
              <h3>Total</h3>
              <h3>${total}</h3>
            </div>
          </div>
          <div className='checkout-btn'>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
