import React from "react";
import Burger from "../../Burger/Burger";

import Button from "../../UI/Button/Button";

import CheckoutSummaryStyles from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={CheckoutSummaryStyles.CheckoutSummary}>
      <h1>We know it tastes well!</h1>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutApproved}>
        CONTINUE
      </Button>
      <div style={{ width: "100%", height: "400px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
    </div>
  );
};

export default checkoutSummary;
