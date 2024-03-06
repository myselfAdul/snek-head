import React, { useContext } from 'react'
import './ProductDisplay.scss'
import star from '../assets/star_icon.png'
import star_fade from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-image">
                <img className='product-diplay-main-image' src={product.image} alt="" />
            </div>      
        </div>
        
        <div className="product-display-right">
            <h1>{product.name}</h1>

            <div className="product-display-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_fade} alt="" />
                <p>(200)</p>
            </div>

            <div className="product-display-right-price">
                <div className="old-price">${product.old_price}</div>
                <div className="new-price">${product.new_price}</div>

            </div>
            <div className="product-display-desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque suscipit, veniam quos velit alias eum libero repudiandae, distinctio eos optio nulla, explicabo ad placeat esse at! Modi quaerat numquam sint!</p>
            </div>

            <div className="product-display-size">
                <h1>Select Size (UK) </h1>
                <div className="product-display-sizes">
                    <div>5</div>
                    <div>6</div>
                    <div>6.5</div>
                    <div>7</div>
                    <div>7.5</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            
        </div>
    </div>
  )
}

export default ProductDisplay
