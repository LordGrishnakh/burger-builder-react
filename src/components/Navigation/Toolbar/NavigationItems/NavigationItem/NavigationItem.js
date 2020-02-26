import React from 'react';
import NavigationItemStyling from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = ( props ) => (
  <li className={NavigationItemStyling.NavigationItem}>
    <NavLink activeClassName={NavigationItemStyling.active} exact to={props.link}>{props.children}</NavLink>
  </li>
);

export default navigationItem;