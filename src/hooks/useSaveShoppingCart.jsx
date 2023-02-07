import { useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingActions";
import { totalPrice } from "../helpers/totalPrice";
import { shoppingReducer } from "../reducer/shoppingReducer";

export const useSaveShoppingCart = (data, closeModal) => {
  const [shopping, setShopping] = useState(
    JSON.parse(localStorage.getItem("ShoppingCart")) ?? []
  );

  const shoppingInitialState = {
    products: [],
    cart: shopping,
  };

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  useEffect(() => {
    dispatch({ type: TYPES.SUCCESS, payload: data });
  }, [data]);

  const { products, cart } = state;

  useEffect(() => {
    setShopping(cart);
  }, [cart]);

  useEffect(() => {
    saveLocal();
  }, [shopping]);

  const saveLocal = () => {
    localStorage.setItem("ShoppingCart", JSON.stringify(shopping));
  };

  const { total, count } = totalPrice(cart);

  const addCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      closeModal();
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    closeModal();
  };

  const handleDescription = (id) => {
    dispatch({ type: TYPES.SHOW_DESCRIPTION, payload: id });
  };
  return {
    shopping,
    products,
    cart,
    total,
    count,
    addCart,
    delFromCart,
    clearCart,
    handleDescription,
  };
};
