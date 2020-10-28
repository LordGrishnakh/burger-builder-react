import React from "react";
import ModalStyling from "./Modal.module.css";
import AuxComponent from "../../../HOC/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <AuxComponent>
      <Backdrop show={props.show} clicked={props.hideModal} />
      <div
        className={ModalStyling.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
          backgroundImage: `url(${props.chosenBurgerPhoto})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className={ModalStyling.Header}>
          <p>Those Delicious GreatBurgers Awaits You!</p>
        </div>
        {props.children}
      </div>
    </AuxComponent>
  );
};

export default React.memo(Modal);
