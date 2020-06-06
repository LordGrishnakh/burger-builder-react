import React from "react";
import ProductStyles from "./Product.module.css";

const Product = (props) => {
  const ingredientsArr = (ingredients) => {
    return Object.entries(ingredients);
  };

  const showShortDescription = (info) => {
    return info.slice(0, 49) + "...";
  }

  return (
    <div className={ProductStyles.CardContainer} onClick={props.click}>
      <div className={ProductStyles.Overlay}>
        <div className={ProductStyles.ContentBox}>
          <h2>{props.title}</h2>
          <ul>
            {ingredientsArr(props.ingredients).map((ingredient) => (
              <li key={ingredient[0]}>
                {ingredient[0]}: {ingredient[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img alt={props.title} src={props.imgURL} />
      <div className={ProductStyles.ProductInfo}>
        <div className={ProductStyles.ProductTitle}>
          {props.title}
        </div>
        <p className={ProductStyles.ProductDesc}>
          {showShortDescription(props.info)}
        </p>
        <p className={ProductStyles.ProductPrice}>{props.price}&#8381;</p>
        <button>Show More</button>
      </div>
    </div>
  );
};

export default Product;
