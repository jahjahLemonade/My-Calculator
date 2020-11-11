import { create, all } from "mathjs";
import React, { useState } from "react";
import "../css/Calculator.css";

const Calculator = () => {
  const [state, setState] = useState("0");
  const [calculation, setCalculation] = useState("");
  const config = {};
  const math = create(all, config);


  const handleClick = (e) => {
    const value = e.target.textContent;
    if (value === "=") {
      if (state !== "+" || state !== "-" || state !== "*" || state !== "/") {
        setState("0")
        setCalculation(prev => math.evaluate(prev + state) < -4294967295 || math.evaluate(prev + state) > 4294967295 ? "Exceeded Digit Limit" : math.evaluate(prev + state) )
      }
    } 
    if (
      state === "0" &&
      (value !== "+" ||
        value !== "-" ||
        value !== "*" ||
        value !== "/" ||
        value !== "0" ||
        value !== "=")
    ) {
      setState(value);
      setCalculation("")
    } else if (
      value === "+" ||
      value === "-" ||
      value === "/" ||
      value === "*"
    ) {
      
      const lastChar = calculation[calculation.length - 1];
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "/" ||
        lastChar === "*"
      ) {
        if (state === "+" || state === "-" || state === "*" || state === "/") {
          setState(value);
        } else {
          setCalculation((prev) => prev + state + value);
          setState(value);
        }
      } else {
          setCalculation((prev) => prev + state + value);
          setState(value);
        }
    } else {
      if (state === "+" || state === "-" || state === "*" || state === "/") {
        setState(value);
      } else {
        if (
          value !== "0" ||
          value !== "+" ||
          value !== "-" ||
          value !== "*" ||
          value !== "/" ||
          value !== "="
        ) {
          if(value !== "=") 
            setState(prev => prev + value);
          }
      }
    }

    if (value === "C") {
      setState("0");
      setCalculation("");
    }
  };
  return (
    <div className="calculator">
      <div id="display" style={{ fontSize: "16px" }}>
        {calculation}
      </div>
      <div id="display">{state}</div>
      <div className="divider"></div>
      <div className="calculator-buttons">
        <button className="btn" id="clear" onClick={(e) => handleClick(e)}>
          C
        </button>
        <button disabled className="btn" id="blank-space">
          n/a
        </button>
        <button className="btn" id="divide" onClick={(e) => handleClick(e)}>
          /
        </button>
        <button className="btn" id="multiply" onClick={(e) => handleClick(e)}>
          *
        </button>
        <button className="btn" id="seven" onClick={(e) => handleClick(e)}>
          7
        </button>
        <button className="btn" id="eight" onClick={(e) => handleClick(e)}>
          8
        </button>
        <button className="btn" id="nine" onClick={(e) => handleClick(e)}>
          9
        </button>
        <button className="btn" id="substract" onClick={(e) => handleClick(e)}>
          -
        </button>
        <button className="btn" id="four" onClick={(e) => handleClick(e)}>
          4
        </button>
        <button className="btn" id="five" onClick={(e) => handleClick(e)}>
          5
        </button>
        <button className="btn" id="six" onClick={(e) => handleClick(e)}>
          6
        </button>
        <button className="btn" id="add" onClick={(e) => handleClick(e)}>
          +
        </button>
        <button className="btn" id="one" onClick={(e) => handleClick(e)}>
          1
        </button>
        <button className="btn" id="two" onClick={(e) => handleClick(e)}>
          2
        </button>
        <button className="btn" id="three" onClick={(e) => handleClick(e)}>
          3
        </button>
        <button className="btn" id="equal" onClick={(e) => handleClick(e)}>
          =
        </button>
        <button className="btn" id="zero" onClick={(e) => handleClick(e)}>
          0
        </button>
        <button className="btn" id="decimal" onClick={(e) => handleClick(e)}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
