import React from 'react'
import './CSS/ShopCategory.scss'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Item from '../Components/ITEM/Item'


const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)
    console.log(all_product)
  return (
    <div className='shop-category'>
        <div className="shop-category-index-sort">
            <p>
                {/* <span>Showing 1-10 </span>out of 15 products */}
            </p>

            <div className="shop-category-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>

        <div className="shop-category-products">
            {all_product.map((item, index)=>{
                if (props.category === item.category){
                    return (<Item key={index} id={item.id} 
                    name={item.name} image={item.image} 
                    old_price={item.old_price} 
                    new_price={item.new_price} />)
                }
                else{
                    return null
                }
            })}
        </div>

        <div className="shop-category-loadmore">
            Explore More
        </div>  
    </div>
  )
}

export default ShopCategory
