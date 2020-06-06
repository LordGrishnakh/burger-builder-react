import React from 'react';
import HistoryStyling from './History.module.css'

export const History = () => {
  return (
    <div className={HistoryStyling.Container}>
      <img src="img/History.webp" alt="adsf" />
      <div className={HistoryStyling.HistoryCard}>
        <h1>SINCE 1991</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis erat quis eleifend bibendum. Sed massa mi, varius in tristique ut, rhoncus quis ante. Aliquam erat volutpat. Nam nunc velit, dapibus nec diam lacinia, pharetra tempus turpis. Fusce tellus velit, bibendum sed mi vel, iaculis rhoncus urna. Praesent efficitur ante id leo lobortis imperdiet. Donec consequat volutpat odio vel condimentum. Ut condimentum lobortis tortor, sit amet condimentum nibh vestibulum vel. Integer interdum at leo at placerat. Nunc at nisl tortor.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis erat quis eleifend bibendum. Sed massa mi, varius in tristique ut, rhoncus quis ante. Aliquam erat volutpat. Nam nunc velit, dapibus nec diam lacinia, pharetra tempus turpis. Fusce tellus velit, bibendum sed mi vel, iaculis rhoncus urna. Praesent efficitur ante id leo lobortis imperdiet. Donec consequat volutpat odio vel condimentum. Ut condimentum lobortis tortor, sit amet condimentum nibh vestibulum vel. Integer interdum at leo at placerat. Nunc at nisl tortor.
        </p>
      </div>
    </div>
  )
};

export default History;
