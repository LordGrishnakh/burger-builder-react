import React from 'react';
import ToolbarStyling from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import HamburgerMenu from './HamburgerMenu.module.css';

const toolbar = ( props ) => (
  <header className={ToolbarStyling.Toolbar}>
    <div onClick={props.click} className={HamburgerMenu.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Logo height="80%" />
    <nav className={ToolbarStyling.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;