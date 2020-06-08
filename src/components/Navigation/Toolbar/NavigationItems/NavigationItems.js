import React from 'react';
import NavigationItemsStyling from './NavigationItems.module.css'
import NavigationItems from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={NavigationItemsStyling.NavigationItems}>
      <NavigationItems link="/">Home</NavigationItems>
      <NavigationItems link="/shop">Main Shop</NavigationItems>
      <NavigationItems link="/burgerBuilder">Burger Builder</NavigationItems>
      { props.isAuthenticated 
          ? <NavigationItems link="/orders">Orders</NavigationItems>
          : null}
      { !props.isAuthenticated 
          ? <NavigationItems link="/auth">Authenticate</NavigationItems>
          : <NavigationItems link="/logout">Logout</NavigationItems> }
    </ul>
  );
}

export default navigationItems;