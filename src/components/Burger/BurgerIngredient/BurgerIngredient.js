import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

import burgerTop from '../../../assets/images/UpperBulka.webp';
import burgerBottom from '../../../assets/images/burger_bread_bottom.webp'
import cheese from '../../../assets/images/cheese.webp'
import meat from '../../../assets/images/meat.webp'
import bacon from '../../../assets/images/bacon.webp'
import salad from '../../../assets/images/salad.webp'

const burgerIngredient = ( props ) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      // ingredient = <div className={styles.BreadBottom}></div>;
      ingredient = <img alt="" src={burgerBottom} className={styles.BreadBottom} />;
      break;

    case 'bread-top':
      ingredient = (
        <img className={styles.BreadTop} alt="" src={burgerTop} />
      );
    break;

    case 'meat':
      // ingredient = <div className={styles.Meat}></div>
      ingredient = <img alt="" src={meat} className={styles.Meat} />
    break;

    case 'cheese':
      // ingredient = <div className={styles.Cheese}></div>
      ingredient = <img className={styles.Cheese} alt="" src={cheese} />
    break;

    case 'salad':
      // ingredient = <div className={styles.Salad}></div>
      ingredient = <img src={salad} alt="" className={styles.Salad} />
    break;

    case 'bacon':
      // ingredient = <div className={styles.Bacon}></div>
      ingredient = <img src={bacon} alt="" className={styles.Bacon} />
    break;
  
    default:
      ingredient = null;
      break;
  }

  return ingredient;
}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;