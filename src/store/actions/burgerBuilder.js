import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = ingrName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingrName
  };
}

export const removeIngredient = ingrName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingrName
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://burger-app-af019.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data))
      })
      .catch(error => {
        
      });
  };
};