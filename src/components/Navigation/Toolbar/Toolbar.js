import React from 'react';
import ToolbarStyling from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const toolbar = ( props ) => (
  <header className={ToolbarStyling.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;