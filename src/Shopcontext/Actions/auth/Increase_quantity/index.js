import { INCREASE_QUANTITY } from "../../../../Constants/ActionTypes";

export const Increasequantity = (item) => (dispatch) => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: item,
  });
};
