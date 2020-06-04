import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import ShopStyling from "./ShopStyling.module.css";
import SelectedProduct from "./SelectedProduct/SelectedProduct";

const Shop = (props) => {
  return (
    <div className={ShopStyling.Shop}>
      <ProductList />
    </div>
  );
};

export default Shop;
