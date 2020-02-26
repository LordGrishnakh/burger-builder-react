import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

import ContactDataStyling from './ContactData.module.css';
import axios from '../../../axios-order';
import { withRouter } from 'react-router-dom';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: null
    }, 
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const orders = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="street" placeholder="Your street" />
        <input type="text" name="zipcode" placeholder="Your zipcode" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
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

export default withRouter(ContactData);