import React from 'react';

import OrderStyling from './Order.module.css'

const order = ( props ) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ingr => {
    return <span 
      style={{textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '5px'}}
      key={ingr.name}>
        {ingr.name} {ingr.amount}</span>
  })
  return (
    <div className={OrderStyling.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p>Price: {props.price} <strong>&#8381;</strong></p>
    </div>
  );
};

export default order;