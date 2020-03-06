import React, { Component } from 'react';
import AuxComponent from '../../HOC/AuxComponent';
import styles from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }
  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true})
  }
  homeRedirectHandler = () => {
    window.location.href = '/';
  }

  render() {
    return (
      <AuxComponent>
        <Toolbar click={this.sideDrawerOpenHandler} clickLogo={this.homeRedirectHandler} isAuth={this.props.isAuthenticated} />
        <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} isAuth={this.props.isAuthenticated} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </AuxComponent> 
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
};

export default connect(mapStateToProps, null)(Layout);