import React, { useState } from "react";
import { evaluate } from "mathjs"; // Kutubxonadan hisoblash funksiyasini import qilish
import "./App.css"; // Stil uchun CSS fayl

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "=") {
      try {
        const calcResult = evaluate(input); // math.js yordamida hisoblash
        setResult(calcResult);
        setInput(calcResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  return (
    <div className="calculator">
      <div id="display">
        <div className="result">{result || input}</div>
      </div>
      <div className="buttons">
        <button id="clear" onClick={() => handleClick("C")}>
          C
        </button>
        <button id="divide" onClick={() => handleClick("/")}>
          ÷
        </button>
        <button id="multiply" onClick={() => handleClick("*")}>
          ×
        </button>
        <button id="subtract" onClick={() => handleClick("-")}>
          -
        </button>
        <button id="add" onClick={() => handleClick("+")}>
          +
        </button>
        <button id="decimal" onClick={() => handleClick(".")}>
          .
        </button>
        <button id="equals" onClick={() => handleClick("=")}>
          =
        </button>
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            id={`number-${i}`}
            onClick={() => handleClick(i.toString())}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
