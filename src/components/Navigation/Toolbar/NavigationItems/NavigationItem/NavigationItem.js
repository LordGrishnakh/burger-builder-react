import React from 'react';
import NavigationItemStyling from './NavigationItem.module.css';

const navigationItem = ( props ) => (
  <li className={NavigationItemStyling.NavigationItem}>
    <a href={props.link} className={props.active ? NavigationItemStyling.active : null}>{props.children}</a>
  </li>
);

export default navigationItem;