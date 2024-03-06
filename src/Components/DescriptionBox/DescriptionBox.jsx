import React from 'react'
import './DescriptionBox.scss'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-nav-box">Description</div>
            <div className="description-box-nav-review">Reviews (20)</div>
        </div>

        <div className="description-box-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aspernatur mollitia nulla accusamus esse a fugit ipsam tempore quisquam voluptate! Odio, eveniet? Explicabo sunt consequuntur doloremque consequatur! Est, facere sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque facilis porro dolorem nostrum ipsa esse mollitia enim magnam culpa!</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
