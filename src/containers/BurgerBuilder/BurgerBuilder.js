import React ,{ useState, useEffect } from "react";
import AuxComponent from '../../HOC/AuxComponent';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../HOC/WithErrorHandler';
import {connect} from 'react-redux';

import * as burgerBuilderActions from '../../store/actions/index';

import axios from '../../axios-order';



export const BurgerBuilder = props => {
  const {onInitIngredients} = props

  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingrKey => {
        return ingredients[ingrKey];
      })
      .reduce((prevV, curV) => {
        return prevV + curV;
      }, 0);
      return sum > 0;
  }

  const purchaseHandler = () => {
    if(props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  };
  const purchaseContinueHandler = () => {
    props.onInitPurchase();
    props.history.push('/checkout');
  };

  const hideModalHandler = () => {
    setPurchasing(false);
  };

  const disabledInfo = {
    ...props.ings
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <=0
  }
  let orderSummary = <OrderSummary 
                        ingredients={props.ings}
                        purchaseCanceled={hideModalHandler}
                        purchaseContinued={purchaseContinueHandler}
                        price={props.price} />

  return (
    <AuxComponent>
      <Modal show={purchasing} hideModal={hideModalHandler}>
        { orderSummary }
      </Modal>
      <Burger ingredients={props.ings} />
      <BuildControls  ingredientAdded={props.onIngredientAdded}
                      ingredientRemove={props.onIngredientRemoved}
                      disabled={disabledInfo}
                      price={props.price}
                      purchasable={updatePurchaseState(props.ings)}
                      isAuth={props.isAuthenticated}
                      ordered={purchaseHandler}/>
    </AuxComponent>
  );
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
    onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));