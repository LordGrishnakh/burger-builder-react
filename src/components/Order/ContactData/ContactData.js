import React, { useState, useEffect } from "react";
import Button from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";

import ContactDataStyling from "./ContactData.module.css";
import { withRouter } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const ContactData = (props) => {
  const [burgerId, setBurgerId] = useState(1);
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Street",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
      },
      valid: false,
      touched: false,
    },
  });

  useEffect(() => {
    if (props.burgerSelect) {
      setOrderForm({
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your Name",
          },
          value: "",
          validation: {
            required: true,
            minLength: 5,
          },
          valid: false,
          touched: false,
        },
        street: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your Street",
          },
          value: "",
          validation: {
            required: true,
            minLength: 5,
          },
          valid: false,
          touched: false,
        },
        burgerSelect: {
          elementType: "select",
          elementConfig: {
            options: props.options,
          },
          value: "fastest",
          validation: {
            required: false,
          },
          valid: true,
        },
      });
    }
  }, []);

  const [formIsValid, setFormIsValid] = useState(false);

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  };

  const orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    const orders = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
      userId: props.userId,
    };
    props.onOrderBurger(orders, props.token);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    console.log(event.target, inputIdentifier, burgerId);
    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };

  const formElements = [];
  for (let key in orderForm) {
    formElements.push({
      id: key,
      config: orderForm[key],
      label: orderForm[key].elementConfig.placeholder,
    });
  }

  let form = (
    <form onSubmit={orderHandler}>
      {formElements.map((formElement, key) => (
        <Input
          key={key}
          changed={(event) => inputChangedHandler(event, formElement.id)}
          elementType={formElement.config.elementType}
          label={formElement.label}
          invalid={!formElement.config.valid}
          touched={formElement.config.touched}
          shouldValidate={formElement.config.validation.required}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changeBurgerImage={setBurgerId}
          burgerId={burgerId}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid}>
        ORDER
      </Button>
    </form>
  );
  if (props.loading) {
    form = <Spinner />;
  }
  return (
    <div className={ContactDataStyling.ContactData}>
      <h2>Enter Your Contact Data</h2>
      {form}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
