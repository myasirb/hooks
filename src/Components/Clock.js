import React, { useReducer, useRef, useEffect } from "react";
import "./css/Clock.css";

const getTime = () =>
  new Date().getHours() +
  " : " +
  new Date().getMinutes() +
  " : " +
  new Date().getSeconds();

const initialState = {
  time: getTime(),
  isRunning: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "stop":
      return { ...state, isRunning: false };

    case "reset":
      return { time: getTime(), isRunning: true };

    case "tick":
      return { ...state, time: getTime() };

    default:
      throw new Error();
  }
}

const Clock = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    timeRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(timeRef.current);
      timeRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="App-clock">
      <span> Clock {state.time} </span>

      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "stop" })}
      >
        Stop
      </button>

      <button
        className="btn btn-light"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Clock;
