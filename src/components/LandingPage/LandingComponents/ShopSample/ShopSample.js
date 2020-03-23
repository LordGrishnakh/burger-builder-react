import React from 'react';

import ShopSampleStyling from './ShopSample.module.css';
import { Link } from 'react-router-dom';

export const ShopSample = () => {
  const image1 = {backgroundImage: "url('img/shopBurger_1.jpeg')"}
  const image2 = {backgroundImage: "url('img/shopBurger_2.jpeg')"}
  const image3 = {backgroundImage: "url('img/shopBurger_3.jpeg')"}

  return (
    <div className={ShopSampleStyling.Container}>
      <div className={ShopSampleStyling.Sample} style={image1}>
        <h1 className={ShopSampleStyling.Title}>WE TAKE OUR FEEDBACK VERY SERIOSLY</h1>
        <Link to="/shop" className={ShopSampleStyling.ShopLink}>SHOW MORE</Link>
      </div>
      <div className={ShopSampleStyling.Sample} style={image2}>
        <h1 className={ShopSampleStyling.Title}>PUT A GREATBURGER IN YOUR LIFE</h1>
        <Link to="/shop" className={ShopSampleStyling.ShopLink}>SHOW MORE</Link>
      </div>
      <div className={ShopSampleStyling.Sample} style={image3}>
        <h1 className={ShopSampleStyling.Title}>WE HAVE A FAST DELIVERY SOLUTION</h1>
        <Link to="/shop" className={ShopSampleStyling.ShopLink}>SHOW MORE</Link>
      </div>
    </div>
  )
};

export default ShopSample;
