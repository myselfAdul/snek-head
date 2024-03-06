import React from 'react'

import new_collections from '../assets/new_collections'

import './NewCollections.scss'
import Item from '../ITEM/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, index)=>{
                return (
                    <Item key={index} id={item.id} 
                    name={item.name} image={item.image} 
                    old_price={item.old_price} 
                    new_price={item.new_price} />
                )

            })}

        </div>
      
    </div>
  )
}

export default NewCollections
