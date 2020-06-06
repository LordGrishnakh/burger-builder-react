import React from "react";
import { productsShop } from "../data";
import SelectedProductStyling from "./SelectedProduct.module.css";

const SelectedProduct = ({ selectedBurger }) => {
  const burger = productsShop[selectedBurger];
  console.log(burger);
  return (
    <div className={SelectedProductStyling.CardContainer}>
      <h1>{burger.title}</h1>
      <img src={burger.img} alt={burger.title} />
      <div className={SelectedProductStyling.CardContent}>
        <p>{burger.info}</p>
        <span>{burger.price} &#8381;</span>
        <div className={SelectedProductStyling.ActionButtons}>
          <button>Take your GreatBurger</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
