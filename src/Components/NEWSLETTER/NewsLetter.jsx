import React from 'react'
import './NewsLetter.scss'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers on Your Email</h1>
        <p>Subscribe to our newsletter to stay updated</p>

        <div>
            <input type="email" placeholder='Put your Email address' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
