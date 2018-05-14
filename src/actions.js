import axios from 'axios';
import { PRODUCT_LIST } from './constants';

const loadProducts = () => {
  return dispatch => {
    axios.get(PRODUCT_LIST)
      .then(response => {
        dispatch({
          type: "REPLACE_PRODUCTS",
          products: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "PRODUCT_RESPONSE",
          text: "Error in network :( Please try later."
        });
      });
  };
};

const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    product
  };
};

const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    product
  };
};

export { loadProducts, addToCart, removeFromCart };