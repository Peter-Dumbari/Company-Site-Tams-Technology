import { UPDATE_ITEM } from "../../../../Constants/ActionTypes";

export const updateitem = () => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM,
    payload: {},
  });
};
