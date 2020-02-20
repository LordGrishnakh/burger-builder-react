import React, { Component } from 'react';
import AuxComponent from '../../HOC/AuxComponent';
import styles from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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

  render() {
    return (
      <AuxComponent>
        <Toolbar click={this.sideDrawerOpenHandler}/>
        <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </AuxComponent> 
    );
  }
}

export default Layout;