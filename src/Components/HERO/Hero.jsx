import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Hero.scss';

import arrow_icon from '../assets/arrow.png';
import hero from '../assets/hero_image.png';
import fire from '../assets/fire.png';
import logo from '../assets/logo1.png';
import nike from '../assets/nike_logo.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Step into Style . . .</h2>
        <div>
          <div className='new-logo'>
            <p>Every</p>
            <img src={nike} alt="wave" />
          </div>
          <p>Stride Tells</p>
          <p>A story</p>        
        </div>
        <div className="latest-btn">
          <Link to="/regular">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
          </Link> 
          {/* <img src={arrow_icon} alt="arrow" /> */}
        </div>
      </div>
      <div className="hero-rotate">
        <img src={fire} alt="hero img" height="600px" />
      </div>
    </div>
  );
}

export default Hero;
