import React from "react";

import ShopSampleStyling from "./ShopSample.module.css";
import ShopSampleCard from "./ShopSampleCard/ShopSampleCard";

export const ShopSample = () => {
  const image1 = { backgroundImage: "url('img/shopBurger_1.webp')" };
  const image2 = { backgroundImage: "url('img/shopBurger_2.webp')" };
  const image3 = { backgroundImage: "url('img/shopBurger_3.webp')" };

  return (
    <div className={ShopSampleStyling.Box}>
      <div className={ShopSampleStyling.Container}>
        <ShopSampleCard
          text="We have a fast delivery solution"
          image={image1}
        />
        <ShopSampleCard text="Great Burgers at any time" image={image2} />
        <ShopSampleCard text="Best Burgers in your city" image={image3} />
      </div>
    </div>
  );
};

export default ShopSample;
