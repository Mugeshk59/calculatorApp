// App.js
import React, { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h1 className="Heading">React Calculator</h1>
      <input
        type="text"
        value={expression}
        readOnly
        className="calculator-screen"
      />
      <div className="calculator-results">{result && <p>{result}</p>}</div>
      <div className="calculator-buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default App;
