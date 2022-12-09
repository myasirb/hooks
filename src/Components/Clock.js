import React, { useReducer, useRef, useEffect } from "react";
import "./css/Clock.css";

const initialState = {
  time: new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds(),
  isRunning: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "stop":
      return { ...state, isRunning: false };

    case "reset":
      return { time: new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds(), isRunning: true };

    case "tick":
      return { ...state, time: new Date().getHours() + ' : ' + new Date().getMinutes() + ' : ' + new Date().getSeconds()  };

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
      <span> Time: {state.time} </span>
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
