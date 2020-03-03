import React from 'react';
import ButtonStyles from './Buttons.module.css';

const button = ( props ) => (
  <button 
    disabled={props.disabled}
    className={[ButtonStyles.Button, ButtonStyles[props.btnType]].join(' ')}
    onClick={props.clicked}>
  {props.children}</button>
);

export default button;