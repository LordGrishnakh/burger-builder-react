import React, { Component } from 'react';
import AuxContainer from '../../../HOC/AuxComponent';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingrKey => {
        return <li key={ingrKey+1}><span style={{textTransdorm: 'capitalize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}</li>
      });
  
    return (
      <AuxContainer>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients: </p>
        <ul>
          {ingredientSummary}
        </ul>
    <p><strong>Total Price: {this.props.price} &#8381;</strong></p>
        <p>Continue to Checkout?</p>
  
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </AuxContainer>
    );
  }
};

export default OrderSummary;