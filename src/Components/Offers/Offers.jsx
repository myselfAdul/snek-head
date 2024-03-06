import React from 'react'
import './Offers.scss'

import hot_deal from '../assets/hot.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Deal for you</h1>
            <p>Only for Today⚡⚡</p>
            <button>Check it out now</button>
        </div>

        <div className="offers-right">
            <img src={hot_deal} alt="hot deal" height='500px' />
        </div>

    </div>
  )
}

export default Offers



                        
