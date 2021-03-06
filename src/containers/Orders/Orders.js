import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-order";
import withErrorHandler from "../../HOC/WithErrorHandler";
import { connect } from "react-redux";

import OrdersStyling from "./Orders.module.css";

import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
  const { onFetchOrders, token, userId } = props;

  useEffect(() => {
    onFetchOrders(token, userId);
  }, [onFetchOrders, token, userId]);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((order, idx) => (
      <Order key={idx} orderId={order.orderId} ingredients={order.ingredients} price={order.price} />
    ));
  }
  return (
    <div>
      <div className={OrdersStyling.WelcomeBox}>
        <p>Your Delicious Great Burgers!</p>
      </div>
      {orders}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
