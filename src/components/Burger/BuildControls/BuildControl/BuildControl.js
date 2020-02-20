import React from 'react';
import ControlStyles from './BuildControl.module.css';

const buildControl = ( props ) => (
  <div className={ControlStyles.BuildControl}>
    <div className={ControlStyles.Label}>{props.label}</div>
    <button className={ControlStyles.Less}
            onClick={props.removed}
            disabled={props.disabled}>LESS</button>
            
    <button className={ControlStyles.More}
            onClick={props.added}>MORE</button>
  </div>
);

export default buildControl;