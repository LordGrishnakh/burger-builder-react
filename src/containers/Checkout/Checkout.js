import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../components/Order/ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import * as actions from '../../store/actions/index';


const Checkout = props => {

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  }

  const checkoutApprovedHandler = () => {
    props.history.replace('/checkout/contact-data');
  }

  let purchasedRedirect = null;
  if (props.ings) {
    purchasedRedirect = props.purchased ? <Redirect to="/" /> : null
  }
  return (
    <div>
      {purchasedRedirect}
      <CheckoutSummary 
        ingredients={props.ings}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutApproved={checkoutApprovedHandler} />
      <Route 
        path={props.match.url + '/contact-data'}
        component={ContactData} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totaPrcice,
    purchased: state.order.purchased
  };
};



export default connect(mapStateToProps, null)(Checkout);