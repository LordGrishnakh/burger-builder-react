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
      <p>{burger.info}</p>
    </div>
  );
};

export default SelectedProduct;
