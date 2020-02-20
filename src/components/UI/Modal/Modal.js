import React from 'react';
import ModalStyling from './Modal.module.css';
import AuxComponent from '../../../HOC/AuxComponent';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
  <AuxComponent>
    <Backdrop show={props.show} clicked={props.hideModal}/>
    <div 
      className={ModalStyling.Modal}
      style={
        {transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'}}>
      {props.children}
    </div>
  </AuxComponent>
);

export default modal;