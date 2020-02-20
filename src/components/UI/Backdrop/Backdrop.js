import React from 'react';
import BackdropStyling from './Backdrop.module.css';

const backdrop = (props) => (
  props.show ? <div className={BackdropStyling.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;