import React from 'react';
import {productsShop} from '../data';
import MainShopCard from '../ProductList/MainShopCard/MainShopCard';

const SelectedProduct = (props) => {
  console.log('WORKING!')
  return (
    <div>
      {/* {productsShop[props.selectedProduct]} */}
      <MainShopCard />
    </div>
  )
}

export default SelectedProduct
