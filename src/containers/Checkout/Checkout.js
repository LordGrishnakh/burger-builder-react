import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../components/Order/ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import * as actions from '../../store/actions/index';


class Checkout extends Component {




  checkoutCancelledHandler = () => {
    this.props.history.goBack();
    console.log("Don't forget to change that when adding more pages");
  }

  checkoutApprovedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let purchasedRedirect = null;
    if (this.props.ings) {
      purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
    }
    return (
      <div>
        {purchasedRedirect}
        <CheckoutSummary 
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutApproved={this.checkoutApprovedHandler} />
        <Route 
          path={this.props.match.url + '/contact-data'}
          component={ContactData} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totaPrcice,
    purchased: state.order.purchased
  };
};



export default connect(mapStateToProps, null)(Checkout);