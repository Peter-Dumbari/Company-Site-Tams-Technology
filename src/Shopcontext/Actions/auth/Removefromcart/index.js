import { REMOVE_FROM_CHART } from "../../../../Constants/ActionTypes";

export const Removefromchart = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CHART,
    payload: item,
  });
};
