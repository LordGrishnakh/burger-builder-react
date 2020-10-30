import React, { useState } from "react";
import Modal from "../../../UI/Modal/Modal";
import { productsShop } from "../../../Shop/data";

import BurgerImageStyling from "./BurgerImage.module.css";
import { Link } from "react-router-dom";
import ContactData from "../../../Order/ContactData/ContactData";

export const BurgerImage = () => {
  const [chosenBurgerPhoto, setChosenBurgerPhoto] = useState("");
  const [purchasing, setPurchasing] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState({});

  const burger = selectedBurger;

  const background = {
    backgroundImage: "url('img/burgerMain.webp')",
  };

  return (
    <div style={background} className={BurgerImageStyling.Image}>
      <Modal
        show={purchasing}
        hideModal={() => setPurchasing(false)}
        chosenBurgerPhoto={chosenBurgerPhoto}
      >
        <ContactData options={productsShop} igns={burger.ingredients} price={burger.price} burgerSelect={true} />
      </Modal>
      <div className={BurgerImageStyling.Overlay}></div>
      <div className={BurgerImageStyling.ContentBox}>
        <button
          onClick={() => setPurchasing(true)}
          className={BurgerImageStyling.Delivery}
        >
          Order Delivery
        </button>
        <h2 className={BurgerImageStyling.Title}>Great Burgers here</h2>
        <h1 className={BurgerImageStyling.Timeline}>Since 1991</h1>
        <Link
          to="/burgerBuilder"
          className={`${BurgerImageStyling.BBLink} ${BurgerImageStyling.BtnWhite}`}
        >
          Build Your Own
        </Link>
        <p>or...</p>
      </div>
    </div>
  );
};

export default BurgerImage;
