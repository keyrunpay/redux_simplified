import { switchTypes } from "../action/switchAction";

const initState = { enabled: false };

const switchReducer = (state = initState, action) => {
  switch (action.type) {
    case switchTypes.ENABLE_SWITCH:
      return { enabled: true };
    case switchTypes.DISABLE_SWITCH:
      return { enabled: false };
    default:
      return { ...state };
  }
};

export default switchReducer;
