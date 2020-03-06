import React from 'react';
import InputStyling from './Input.module.css';

const input = ( props ) => {
  let inputElement = null;
  const inputStyles = [InputStyling.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(InputStyling.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = <input 
                        className={inputStyles.join(' ')}
                        onChange={props.changed} 
                        {...props.elementConfig}
                        value={props.value} />
      break;
    case 'textarea':
      inputElement = <textarea 
                        className={inputStyles.join(' ')}
                        onChange={props.changed} 
                        {...props.elementConfig}
                        value={props.value}/>
      break;
    case 'select':
      inputElement = (
        <select className={inputStyles.join(' ')}
                onChange={props.changed}
                value={props.value} >
          
          {props.elementConfig.options.map((option, idx)=>(
            <option key={idx} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
  
    default:
      inputElement = <input 
                        className={inputStyles.join(' ')}
                        onChange={props.changed} 
                        {...props.elementConfig}
                        value={props.value} />
      break;
  }

  return (
    <div className={InputStyling.Input}>
      <label className={InputStyling.Label}>{props.label}</label>
      { inputElement }
    </div>
  );
}

export default input;