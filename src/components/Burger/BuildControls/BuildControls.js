import React from 'react';
import BuildControlStyles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];
console.log(controls[0].type);


const buildConrols = ( props ) => (
  <div className={BuildControlStyles.BuildControls}>
    <p>Current Price {props.price} &#8381; </p>
    {controls.map(control => (
      <BuildControl key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemove(control.type)}
                    disabled={props.disabled[control.type]} />
    ))}
  </div>
);

export default buildConrols;