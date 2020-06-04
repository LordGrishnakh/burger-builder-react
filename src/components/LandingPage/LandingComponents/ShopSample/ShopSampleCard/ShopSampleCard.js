import React from "react";
import CardStyling from './CardStyling.module.css';
import { Link } from "react-router-dom"

const ShopSampleCard = (props) => {
  return (
    <div className={CardStyling.Sample} style={props.image}>
      <div className={CardStyling.Overlay}></div>
      <h1 className={CardStyling.Title}>
        {props.text}
      </h1>
      <Link to="/shop" className={CardStyling.ShopLink}>
        SHOW MORE
      </Link>
    </div>
  );
};

export default ShopSampleCard;
