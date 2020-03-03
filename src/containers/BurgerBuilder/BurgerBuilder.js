import React ,{ Component } from "react";
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



class BurgerBuilder extends Component {
  state = {
    purchasing: false
  }

  componentDidMount() {
    this.props.onInitIngredients()
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingrKey => {
        return ingredients[ingrKey];
      })
      .reduce((prevV, curV) => {
        return prevV + curV;
      }, 0);
      return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  hideModalHandler = () => {
    this.setState({ purchasing: false })
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0
    }
    let orderSummary = <OrderSummary 
                          ingredients={this.props.ings}
                          purchaseCanceled={this.hideModalHandler}
                          purchaseContinued={this.purchaseContinueHandler}
                          price={this.props.price} />

    return (
      <AuxComponent>
        <Modal show={this.state.purchasing} hideModal={this.hideModalHandler}>
          { orderSummary }
        </Modal>
        <Burger ingredients={this.props.ings} />
        <BuildControls  ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemove={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}/>
      </AuxComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
    onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));