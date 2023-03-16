import { ADD_TO_CHART } from "../../../../Constants/ActionTypes";

export const addtochart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CHART,
    payload: item,
  });
};
