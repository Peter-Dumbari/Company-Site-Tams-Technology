import {
  ADD_TO_CHART,
  REMOVE_FROM_CHART,
  REDUCE_ITEMS_QUANTITY,
  INCREASE_QUANTITY,
} from "../../Constants/ActionTypes";

const auth = (state, action) => {
  switch (action.type) {
    case ADD_TO_CHART:
      const index = state.cartitems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index == -1) {
        return {
          ...state,
          cartitems: [...state.cartitems, action.payload],
          totalPrice: state.totalPrice + action.payload.newprice,
          newPrice: (action.payload.newPrice = action.payload.newprice),
          addedtocart: (action.payload.addedtocart = true),
        };
      }

    case REMOVE_FROM_CHART:
      const updatedItems = state.cartitems.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedPrice = state.totalPrice - action.payload.newPrice;
      return {
        ...state,
        cartitems: updatedItems,
        totalPrice: updatedPrice,
      };

    case REDUCE_ITEMS_QUANTITY:
      const updatedIt = state.cartitems.map((item) => {
        if (
          item.id === action.payload.id &&
          item.newPrice > action.payload.newprice
        ) {
          const updatedQuantity = item.quantity - 1;
          const newPrice = action.payload.newprice * updatedQuantity;
          return { ...item, quantity: updatedQuantity, newPrice };
        } else {
          return item;
        }
      });

      const totalPrice = updatedIt.reduce((total, item) => {
        return total + item.newPrice;
      }, 0);
      return {
        ...state,
        cartitems: updatedIt,

        totalPrice: totalPrice,
      };

    case INCREASE_QUANTITY:
      const updated = state.cartitems.map((item) => {
        if (item.id === action.payload.id) {
          const updatedQuantity = item.quantity + 1;
          const newPrice = action.payload.newprice * updatedQuantity;
          return { ...item, quantity: updatedQuantity, newPrice };
        } else {
          return item;
        }
      });
      const totalP = updated.reduce((total, item) => {
        return total + item.newPrice;
      }, 0);
      return {
        ...state,
        cartitems: updated,
        totalPrice: totalP,
      };
    default:
      break;
  }
};

export default auth;
