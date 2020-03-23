import React from 'react';

import BurgerImageStyling from './BurgerImage.module.css';
import { Link } from 'react-router-dom';


export const BurgerImage = () => {
  const background = {
    backgroundImage: "url('img/burgerImage.png')"
  }

  return (
    <div style={background} className={BurgerImageStyling.Image}>
      <div>
        <button className={BurgerImageStyling.Delivery}>Order Delivery</button>
        <h2 className={BurgerImageStyling.Title}>Great Burgers here</h2>
        <h1 className={BurgerImageStyling.Timeline}>Since 1991</h1>
        <Link to="/burgerBuilder" className={BurgerImageStyling.BBLink} >Build Your Own</Link>
      </div>
    </div>
  )
};

export default BurgerImage;
