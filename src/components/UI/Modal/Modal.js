import React, { Component } from 'react';
import ModalStyling from './Modal.module.css';
import AuxComponent from '../../../HOC/AuxComponent';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {
    console.log('Modal Update');
    
  }

  render() {
    return (
      <AuxComponent>
        <Backdrop show={this.props.show} clicked={this.props.hideModal}/>
        <div 
          className={ModalStyling.Modal}
          style={
            {transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'}}>
          {this.props.children}
        </div>
      </AuxComponent>
    );
  }
}

export default Modal;