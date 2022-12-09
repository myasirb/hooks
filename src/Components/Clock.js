import React from "react";
import "./css/Clock.css";

const Clock = () => {
  return (
    <div className="App-clock">
        Time 
        <button className="btn btn-warning">Stop</button>
        <button className="btn btn-light">Reset</button>
    </div>
);
};

export default Clock;
