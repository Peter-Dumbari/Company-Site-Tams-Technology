import { REDUCE_ITEMS_QUANTITY } from "../../../../Constants/ActionTypes";

export const Reducequantity = (item) => (dispatch) => {
  dispatch({
    type: REDUCE_ITEMS_QUANTITY,
    payload: item,
  });
};
