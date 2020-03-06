import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

import ContactDataStyling from './ContactData.module.css';
import { withRouter } from 'react-router-dom';
import Input from '../../UI/Input/Input';
import { connect } from 'react-redux'; 

import * as actions from '../../../store/actions/index';


class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zipcode'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest',displayValue: 'Cheapest'}]
        },
        value: 'fastest',
        validation: {
          required: false
        },
        valid: true
      }
    },
    formIsValid: false
  }

  checkValidity(value, rules) {
    let isValid = true;
    if( rules.required) {
      isValid = value.trim !=='' && isValid;
    }

    if(rules.minLength) {
      isValid = value.length >=rules.minLength && isValid;
    }

    return isValid;
  }

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const orders = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId
    };
    this.props.onOrderBurger(orders, this.props.token);
  }

  inputChangedHandler = (event, inputIdentifier) => {    
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  }

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        { formElements.map((formElement, key)=> (
          <Input  key={key}
                  changed={(event)=>this.inputChangedHandler(event, formElement.id)}
                  elementType={formElement.config.elementType}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation.required}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value} /> 
        )) }
        <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />
    }
    return (
      <div className={ContactDataStyling.ContactData}>
        <h4>Enter Your Contact Data</h4>
        { form }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));