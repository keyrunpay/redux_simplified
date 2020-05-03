import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import switchReducer from "./switchReducer";

const allReducer = combineReducers({
  counter: counterReducer,
  switch: switchReducer,
});

export default allReducer;
