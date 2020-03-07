import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import SideDrawerStyling from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import AuxComponent from '../../../HOC/AuxComponent';

const sideDrawer = ( props ) => {
  let attachedClasses = [SideDrawerStyling.SideDrawer, SideDrawerStyling.Close];
  if (props.open) {
    attachedClasses = [SideDrawerStyling.SideDrawer, SideDrawerStyling.Open]
  }

  return (
    <AuxComponent>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </AuxComponent>
  );
};

export default sideDrawer;