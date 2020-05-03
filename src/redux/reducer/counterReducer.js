import { counterTypes } from "../action/counterAction";

const initState = 0;

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case counterTypes.INCREAMENT:
      return state + 1;
    case counterTypes.DECREAMENT:
      return state - 1;
    case counterTypes.INCREAMENTN:
      return state + action.payload;
    default:
      return state;
  }
};

export default counterReducer;
