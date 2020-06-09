import React from "react";
import { productsShop } from "../data";
import SelectedProductStyling from "./SelectedProduct.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const SelectedProduct = (props) => {
  console.log(props.token);
  const burger = productsShop[props.selectedBurger];
  const addToCartHandler = () => {
    const ingredients = {
      salad: burger.ingredients.salad,
      bacon: burger.ingredients.bacon,
      cheese: burger.ingredients.cheese,
      meat: burger.ingredients.meat,
    };
    const order = {
      ingredients: ingredients,
      orderData: "Ordered via shop",
      price: burger.price,
      userId: props.userId,
      orderId: new Date().getTime().toString(),
    };
    props.onOrderBurger(order, props.token);
  };

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
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
