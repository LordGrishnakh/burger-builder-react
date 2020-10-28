import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import ShopStyling from "./ShopStyling.module.css";
import SelectedProduct from "./SelectedProduct/SelectedProduct";

const Shop = (props) => {
  const [burgerId, setBurgerId] = useState(null);
  const onProductSelect = (id) => {
    setBurgerId(id);
  };
  const onProductDeselect = () => {
    setBurgerId(null);
  };
  return (
    <div className={ShopStyling.Shop}>
      {burgerId && (
        <SelectedProduct
          selectedBurger={burgerId}
          onProductDeselect={onProductDeselect}
        />
      )}
      <ProductList productSelect={onProductSelect} />
    </div>
  );
};

export default Shop;
