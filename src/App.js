import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  increamentByN,
} from "./redux/action/counterAction";
import Switch from "./Switch";

function App() {
  return (
    <div className="app">
      <b>Redux Simplified @Buggged</b>
      <br /> <br />
      <Counter />
      <br />
      <br />
      <Switch />
    </div>
  );
}

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="count">
      <h3>Counter: {counter}</h3>
      <br />
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch(increamentByN(5));
        }}
      >
        Increament 5
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Decreament
      </button>
    </div>
  );
}

export default App;
