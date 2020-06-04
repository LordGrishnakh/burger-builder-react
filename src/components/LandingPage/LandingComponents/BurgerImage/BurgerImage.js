import React from 'react';

import BurgerImageStyling from './BurgerImage.module.css';
import { Link } from 'react-router-dom';


export const BurgerImage = () => {
  const background = {
    backgroundImage: "url('img/burgerMain.png')"
  }

  return (
    <div style={background} className={BurgerImageStyling.Image}>
      <div className={BurgerImageStyling.Overlay}></div>
      <div className={BurgerImageStyling.ContentBox}>
        <button className={BurgerImageStyling.Delivery}>Order Delivery</button>
        <h2 className={BurgerImageStyling.Title}>Great Burgers here</h2>
        <h1 className={BurgerImageStyling.Timeline}>Since 1991</h1>
        <Link to="/burgerBuilder" className={`${BurgerImageStyling.BBLink} ${BurgerImageStyling.BtnWhite}`} >Build Your Own</Link>
        <p>or...</p>
      </div>
    </div>
  )
};

export default BurgerImage;
