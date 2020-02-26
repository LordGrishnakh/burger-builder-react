import React ,{ Component } from "react";
import AuxComponent from '../../HOC/AuxComponent';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../HOC/WithErrorHandler';


const INGREDIENT_PRICES = {
  salad: 10,
  cheese: 15,
  meat: 45,
  bacon: 60
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 55,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingrKey => {
        return ingredients[ingrKey];
      })
      .reduce((prevV, curV) => {
        return prevV + curV;
      }, 0);
      this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <=0) {

      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const orders = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'rogI',
        address: {
          street: 'Kataskina 16',
          zip: '131313',
          country: 'Arstotzka'
        },
        email: 'emailtest@test.test'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', orders)
      .then(response => {
        this.setState({ loading: false,
                        purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false,
                        purchasing: false });
      });
      const queryParams = [];
      for (let i in this.state.ingredients) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
      }
      const queryString = queryParams.join('&');
      console.log(queryString)
      this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
      });
  };

  hideModalHandler = () => {
    this.setState({ purchasing: false })
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0
    }
    let orderSummary = <OrderSummary 
                          ingredients={this.state.ingredients}
                          purchaseCanceled={this.hideModalHandler}
                          purchaseContinued={this.purchaseContinueHandler}
                          price={this.state.totalPrice} />
    if(this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <AuxComponent>
        <Modal show={this.state.purchasing} hideModal={this.hideModalHandler}>
          { orderSummary }
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls  ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}/>
      </AuxComponent>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);