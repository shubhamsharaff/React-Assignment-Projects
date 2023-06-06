import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="calculator__buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
