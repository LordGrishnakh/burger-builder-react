import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import ShopStyling from "./ShopStyling.module.css";
import SelectedProduct from "./SelectedProduct/SelectedProduct";

const Shop = (props) => {
  const [burgerId, setBurgerId] = useState(0);
  const onProductSelect = (id) => {
    setBurgerId(id - 1);
  };
  return (
    <div className={ShopStyling.Shop}>
      <SelectedProduct selectedBurger={burgerId} />
      <ProductList productSelect={onProductSelect} />
      <button onClick={()=>console.log(burgerId)}>log id</button>
    </div>
  );
};

export default Shop;
