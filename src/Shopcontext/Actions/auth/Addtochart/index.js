import { ADD_TO_CHART } from "../../../../Constants/ActionTypes";

export const addtochart = () => (dispatch) => {
  dispatch({
    type: ADD_TO_CHART,
    payload: {},
  });
};
