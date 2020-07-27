import React, { useState } from "react";
import Spinner from "../../UI/Spinner/Spinner";
import { productsShop } from "../data";
import SelectedProductStyling from "./SelectedProduct.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import Modal from "../../UI/Modal/Modal";
import ContactData from "../../Order/ContactData/ContactData";

const SelectedProduct = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const burger = productsShop[props.selectedBurger];
  const addToCartHandler = () => {
    const ingredients = {
      salad: burger.ingredients.salad,
      bacon: burger.ingredients.bacon,
      cheese: burger.ingredients.cheese,
      meat: burger.ingredients.meat,
    };
    if (!props.userId) {
      return;
    }
    const order = {
      ingredients: ingredients,
      orderData: "Ordered via shop",
      price: burger.price,
      userId: props.userId,
      orderId: new Date().getTime().toString(),
    };
    props.onOrderBurger(order, props.token);
  };
  const hideModalHandler = () => {
    setPurchasing(false);
  };

  let loadingContent = (
    <div className={SelectedProductStyling.ActionButtons}>
      <button onClick={() => setPurchasing(true)}>Take your GreatBurger</button>
      <button onClick={addToCartHandler} disabled={!props.userId}>
        Add to Cart
      </button>
    </div>
  );

  if (props.loading) {
    loadingContent = <Spinner />;
  }

  return (
    <div className={SelectedProductStyling.CardContainer}>
      <Modal show={purchasing} hideModal={hideModalHandler}>
        <div>
          <ContactData igns={burger.ingredients} price={burger.price} />
        </div>
      </Modal>
      <h1>{burger.title}</h1>
      <img src={burger.img} alt={burger.title} />
      <div className={SelectedProductStyling.CardContent}>
        <p>{burger.info}</p>
        <span>{burger.price} &#8381;</span>
        {loadingContent}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
