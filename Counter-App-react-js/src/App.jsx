import React, { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <h2>Counter App</h2>
      <p className="count">Count: {count}</p>
      <div className="buttons">
        <button className="increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="decrement-btn" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
