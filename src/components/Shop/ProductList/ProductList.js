import React, { useState } from 'react';
import Product from './Product/Product';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import { productsShop } from './../data';
import ProductListStyles from './ProductList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


const ProductList = props => {
  const [products, setProducts] = useState(productsShop);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [burgerId, setBurgerId] = useState(0);


  const authRedirect = () => {
    window.location.href = "/auth";
  };

  const clickHandler = (id) => {
    setBurgerId(id-1)
    setIsPurchasing(true);
  };
  const purchaseContinueHandler = () => {
    console.log('continued');
    const orders = {
      ingredients: products[burgerId].ingredients,
      price: products[burgerId].price,
      orderData: products[burgerId].info,
      userId: props.userId
    };
    props.onOrderBurger(orders, props.token);
    setTimeout(() => {
      setIsPurchasing(false);
    }, 1000);
  };
  
  const hideModalHandler = () => {
    setIsPurchasing(false);
  };
  
  let orderSummary = <OrderSummary
                        ingredients={products[burgerId].ingredients} 
                        purchaseCanceled={hideModalHandler}
                        purchaseContinued={purchaseContinueHandler}
                        orderNow={true}
                        price={products[burgerId].price} />
  console.log(products)
  return (
    <React.Fragment>
      <Modal show={isPurchasing} hideModal={hideModalHandler}>
        {props.isAuthenticated ? orderSummary : <React.Fragment><div>You must have an account to continue</div><Button btnType="Success" clicked={authRedirect}>Authenticate Here</Button></React.Fragment>}
      </Modal>
      <div className={ProductListStyles.Container}>
        {products.map((product, key)=>{
          return <Product key={key} title={product.title} imgURL={product.img} price={product.price} click={clickHandler.bind(this, product.id)} />
        })}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
    isAuthenticated: state.auth.token !==null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);