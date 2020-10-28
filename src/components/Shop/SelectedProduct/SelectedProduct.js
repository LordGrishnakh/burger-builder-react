import React, { useState, useRef, useEffect } from "react";
import Spinner from "../../UI/Spinner/Spinner";
import { productsShop } from "../data";
import SelectedProductStyling from "./SelectedProduct.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import Modal from "../../UI/Modal/Modal";
import ContactData from "../../Order/ContactData/ContactData";

const SelectedProduct = (props) => {
  const [purchasing, setPurchasing] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (props.purchased) {
      setPurchasing(false);
      console.log("purchased")
    }
  }, [props.purchased])

  const moveText = (e) => {
    setTop(e.clientY);
    setLeft(e.clientX);
    textRef.current.style.top = top + 20 + "px";
    textRef.current.style.left = left + "px";
  };

  const burger = productsShop[props.selectedBurger - 1];
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
      <button
        onClick={addToCartHandler}
        className={!props.userId ? SelectedProductStyling.Disabled : null}
        onMouseEnter={
          !props.userId ? () => (textRef.current.style.display = "block") : null
        }
        onMouseMove={!props.userId ? (e) => moveText(e) : null}
        onMouseLeave={
          !props.userId ? () => (textRef.current.style.display = "none") : null
        }
      >
        Add to Cart
      </button>
      <span
        className={SelectedProductStyling.CancelBtn}
        onClick={props.onProductDeselect}
      >
        X
      </span>
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
      <div
        style={{ display: "none" }}
        className={SelectedProductStyling.FloatingText}
        ref={textRef}
      >
        Login first to continue!
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.order.loading,
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
