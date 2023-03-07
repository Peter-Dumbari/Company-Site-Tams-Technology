import {
  UPDATE_ITEM,
  ADD_TO_CHART,
  REMOVE_FROM_CHART,
} from "../../Constants/ActionTypes";

const auth = (state, action) => {
  switch (action.type) {
    case ADD_TO_CHART:
      const newCartItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      };
      const updatedCartItems = [...state.cartItems, newCartItem];
      const updatedTotalItems = state.totalItems + 1;
      const updatedTotalPrice = state.totalPrice + action.payload.price;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
      };

    case REMOVE_FROM_CHART:
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedPrice = state.totalPrice - action.payload.price;
      const updatedQuantity = state.totalItems - action.payload.quantity;
      return {
        ...state,
        cartItems: updatedItems,
        totalPrice: updatedPrice,
        totalItems: updatedQuantity,
      };

    case UPDATE_ITEM:
      const updatedItemsList = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
      const updatedTotalItemsQty = updatedItemsList.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const updatedTotalPriceQty = updatedItemsList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return {
        ...state,
        cartItems: updatedItemsList,
        totalItems: updatedTotalItemsQty,
        totalPrice: updatedTotalPriceQty,
      };
    default:
      break;
  }
};

export default auth;
