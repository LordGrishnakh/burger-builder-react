import React from 'react'
import LandingPageStyling from './LandingPage.module.css';

import BurgerImage from './LandingComponents/BurgerImage/BurgerImage';
import ShopSample from './LandingComponents/ShopSample/ShopSample';
import History from './LandingComponents/History/History';
import Customers from './LandingComponents/Customers/Customers';
// import Location from './LandingComponents/Location/Location';

export const LandingPage = () => {
  return (
    <div className={LandingPageStyling.MainArea}>
      <BurgerImage />
      <ShopSample />
      <History />
      <Customers />
      {/* Later Will Add GoogleMap <Location /> */}
    </div>
  )
};

export default LandingPage;
