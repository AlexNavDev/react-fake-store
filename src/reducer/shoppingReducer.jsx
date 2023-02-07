import { TYPES } from "../actions/shoppingActions";

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.SUCCESS: {
      return { ...state, products: action.payload };
    }
    case TYPES.ADD_TO_CART: {
      const newProduct = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === newProduct.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newProduct.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newProduct, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      const itemDelete = state.cart.find((item) => item.id === action.payload);

      return itemDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return { ...state, cart: [] };
    }
    case TYPES.SHOW_DESCRIPTION: {
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, showDescription: !item.showDescription }
            : item
        ),
      };
    }

    default:
      return state;
  }
}
