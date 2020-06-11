import React, { useState } from 'react';
import AuxComponent from '../../HOC/AuxComponent';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const Layout = props => {
  const [sideDrawerVisible, setSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawer(false);
  }
  const sideDrawerOpenHandler = () => {
    setSideDrawer(!sideDrawerVisible);
  }
  const homeRedirectHandler = () => {
    window.location.href = '/';
  }

  return (
    <AuxComponent>
      <Toolbar click={sideDrawerOpenHandler} clickLogo={homeRedirectHandler} isAuth={props.isAuthenticated} />
      <SideDrawer closed={sideDrawerCloseHandler} open={sideDrawerVisible} isAuth={props.isAuthenticated} />
      <main>
        {props.children}
      </main>
    </AuxComponent> 
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, null)(Layout);