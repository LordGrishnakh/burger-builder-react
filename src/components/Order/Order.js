import React, { useState } from "react";

import OrderStyling from "./Order.module.css";

const Order = (props) => {
  const [isBarShown, setIsBarShown] = useState(false);
  const [disabled, setDisabled] = useState(false);
  let [barValue, setBarValue] = useState(0);

  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const startEating = () => {
    setIsBarShown(true);
    setDisabled(true);
    setInterval(() => {
      setBarValue(barValue++);
    }, 100);
  };

  const ingredientOutput = ingredients.map((ingr) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ingr.name}
      >
        {ingr.name} {ingr.amount}
      </span>
    );
  });
  return (
    <div className={OrderStyling.Order}>
      {barValue < 100 ? (
        <React.Fragment>
          <h1>Great Burger:</h1>
          <p>Ingredients: {ingredientOutput} </p>
          <p>
            Price: {props.price} <strong>&#8381;</strong>
          </p>
          <button onClick={startEating} disabled={disabled}>
            <i className="fas fa-hamburger fa-4x"></i>
          </button>
          {isBarShown ? (
            <progress
              max="100"
              value={barValue}
              className={OrderStyling.ProgressBar}
            >
              70%
            </progress>
          ) : null}
        </React.Fragment>
      ) : (
        <p>DONE</p>
      )}
    </div>
  );
};

export default Order;
