import React from "react";
import InputStyling from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  const inputStyles = [InputStyling.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(InputStyling.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          onChange={props.changed}
          onFocus={(e) => e.target.removeAttribute("placeholder")}
          onBlur={(e) => e.target.setAttribute("placeholder", props.label)}
          id={props.label}
          name={props.label}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputStyles.join(" ")}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          style={{
            height: "160px",
            width: "160px",
            backgroundImage: `url(${
              props.elementConfig.options[props.burgerId - 1].img
            })`,
          }}
          className={inputStyles.join(" ")}
          onChange={(e) => props.changeBurgerImage(e.target.value)}
        >
          {props.elementConfig.options.map((option, idx) => (
            <option key={idx} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }

  return (
    <div className={InputStyling.Input}>
      {inputElement}
      <label
        htmlFor={props.label}
        style={
          props.value ? { visibility: "visible", marginTop: "-.4rem" } : null
        }
        className={InputStyling.Label}
      >
        {props.label}
      </label>
    </div>
  );
};

export default input;
