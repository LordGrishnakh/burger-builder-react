import React from 'react';
import burgerStyles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom';

const burger = ( props ) => {

  let transformedIngredients = Object.keys(props.ingredients).map( ingredKey => {
    return [...Array(props.ingredients[ingredKey])].map((v, i) => {
      return <BurgerIngredient type={ingredKey} key={ingredKey+i} />
    })
  })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className={burgerStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);