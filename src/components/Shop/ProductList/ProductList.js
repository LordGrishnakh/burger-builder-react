import React, { useState } from "react";
import Product from "./Product/Product";
import { productsShop } from "./../data";
import ProductListStyles from "./ProductList.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const ProductList = (props) => {
  const [products] = useState(productsShop);

  return (
    <div className={ProductListStyles.Container}>
      {products.map((product, key) => {
        return (
          <Product
            key={key}
            title={product.title}
            imgURL={product.img}
            price={product.price}
            info={product.info}
            ingredients={product.ingredients}
            click={props.productSelect.bind(this, product.id)}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
