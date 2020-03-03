import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import LogoStyling from './Logo.module.css';

const logo = ( props ) => (
  <div
        className={LogoStyling.Logo}
        style={{height: props.height}}
        onClick={props.click}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
);

export default logo;