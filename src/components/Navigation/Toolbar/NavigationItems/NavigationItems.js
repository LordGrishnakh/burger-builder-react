import React from 'react';
import NavigationItemsStyling from './NavigationItems.module.css'
import NavigationItems from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={NavigationItemsStyling.NavigationItems}>
    <NavigationItems link="/" active>Burger Builder</NavigationItems>
    <NavigationItems link="/">Checkout</NavigationItems>
  </ul>
);

export default navigationItems;