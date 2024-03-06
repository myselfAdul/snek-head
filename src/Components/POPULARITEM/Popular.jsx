import React from 'react'

import './Popular.scss'
import data_product from '../assets/data'
import Item from '../ITEM/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Sneaker for Daily Use</h1>
        <hr />
        <div className='popular-item'>
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

export default Popular
