import React from 'react';
import ProductStyles from './Product.module.css';

const Product = props => {
  return (
    <div className={ProductStyles.CartContainer} onClick={props.click}>
      <img alt="" src={props.imgURL} />
      <button className={ProductStyles.OrderButton}>Purchase {props.title} - {props.price}&#8381; </button>
    </div>
  );
};

export default Product;