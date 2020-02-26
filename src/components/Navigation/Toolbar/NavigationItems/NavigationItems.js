import React from 'react';
import NavigationItemsStyling from './NavigationItems.module.css'
import NavigationItems from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={NavigationItemsStyling.NavigationItems}>
    <NavigationItems link="/">Burger Builder</NavigationItems>
    <NavigationItems link="/orders">Orders</NavigationItems>
  </ul>
);

export default navigationItems;