import React from 'react'
import './RelatedProducts.scss'
import data_product from '../assets/data'
import Item from '../ITEM/Item'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h1>Check Related Products</h1>
        <hr />
        <div className="related-items">
            {data_product.map((item, index)=>{
                return (<Item key={index} id={item.id} 
                    name={item.name} image={item.image} 
                    old_price={item.old_price} 
                    new_price={item.new_price} />)
            })}
        </div>
      
    </div>
  )
}

export default RelatedProducts
