import React from 'react';
import AuxContainer from '../../../HOC/AuxComponent';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingrKey => {
      return <li key={ingrKey+1}><span style={{textTransdorm: 'capitalize'}}>{ingrKey}</span>: {props.ingredients[ingrKey]}</li>
    });

  return (
    <AuxContainer>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
  <p><strong>Total Price: {props.price} &#8381;</strong></p>
      <p>Continue to Checkout?</p>

      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </AuxContainer>
  );
};

export default OrderSummary;