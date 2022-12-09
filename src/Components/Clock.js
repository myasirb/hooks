import React, { useReducer, useRef, useEffect } from "react";
import "./css/Clock.css";

// Function that returns current time
const getTime = () =>
  new Date().getHours() +
  " : " +
  new Date().getMinutes() +
  " : " +
  new Date().getSeconds();

// initial state of component
const initialState = {
  time: getTime(),
  isRunning: true,
};

// reducer function that changes state on different type of actions
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
  // get dispatch message and state
  const [state, dispatch] = useReducer(reducer, initialState);

  // for dispatching tick action after 1 second
  const timeRef = useRef(0);

  useEffect(() => {
    // if clock is not running do nothing
    if (!state.isRunning) {
      return;
    }

    // set an interval function that runs after every 1 second, it dispatch a request to tick
    timeRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(timeRef.current);
      timeRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="App-clock">
      <span> Clock {state.time} </span>

      {/* Stop the clock */}
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "stop" })}
      >
        Stop
      </button>

      {/* reset the clock to current time */}
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
