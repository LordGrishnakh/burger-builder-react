import React, { useState } from 'react';

import CustomersStyling from './Customers.module.css';
export const Customers = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div>
    <h1 className={CustomersStyling.Title}>What Our Customers Say About Us?</h1>
    <div className={CustomersStyling.Container}>
      <div className={CustomersStyling.CustomerCard} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        {isHovered ? <React.Fragment>
                      <img src="img/person-1.jpg" alt="1" />
                      <p>Aliquam erat volutpat. Nam nunc velit, dapibus nec diam lacinia, pharetra tempus turpis. Fusce tellus velit, bibendum sed mi vel, iaculis rhoncus urna. Praesent efficitur ante id leo lobortis imperdiet</p>
                     </React.Fragment>
        : <React.Fragment>
            <i className="fas fa-hamburger"></i>
            <p>Lena 24y.o</p>
        </React.Fragment>} 
      </div>
      <div className={CustomersStyling.CustomerCard} onMouseEnter={()=>setIsHovered2(true)} onMouseLeave={()=>setIsHovered2(false)}>
        {isHovered2 ?  <React.Fragment>
                        <img src="img/Steve.jpg" alt="1" />
                        <p> ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis erat quis eleifend bibendum. Sed massa mi, varius in tristique ut, rhoncus quis ante.</p>
                      </React.Fragment>
                   :  <React.Fragment>
                        <i className="fas fa-utensils"></i>
                        <p>Steve 12y.o</p>
                      </React.Fragment> }
      </div>
      <div className={CustomersStyling.CustomerCard} onMouseEnter={()=>setIsHovered3(true)} onMouseLeave={()=>setIsHovered3(false)}>
        {isHovered3 ? <React.Fragment>
                        <img src="img/person-2.jpg" alt="1" />
                        <p>Donec consequat volutpat odio vel condimentum. Ut condimentum lobortis tortor, sit amet condimentum nibh vestibulum vel. Integer interdum at leo </p>
                      </React.Fragment>
                    : <React.Fragment>
                        <i className="fas fa-hamburger"></i>
                        <p>Katya 25y.o</p>
                      </React.Fragment> }
      </div>
    </div>
    </div>
  )
};

export default Customers;
