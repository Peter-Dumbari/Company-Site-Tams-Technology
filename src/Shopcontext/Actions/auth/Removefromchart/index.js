import { REMOVE_FROM_CHART } from "../../../../Constants/ActionTypes";

export const removefromchart = () => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CHART,
    payload: {},
  });
};
