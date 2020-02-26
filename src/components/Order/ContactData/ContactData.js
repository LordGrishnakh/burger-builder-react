import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

import ContactDataStyling from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: null
    }
  }
  render() {
    return (
      <div className={ContactDataStyling.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="zipcode" placeholder="Your zipcode" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;