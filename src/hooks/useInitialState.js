import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((items, currentIndex) => currentIndex!== indexToRemove),
    });
  };
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload
    })
  }
  return {
    addToBuyer,
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
