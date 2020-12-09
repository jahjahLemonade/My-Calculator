import { create, all } from "mathjs";
import React, { useState } from "react";
import "../css/Calculator.css";

const Calculator = ({
  btn,
  opBtn,
  fontColor,
  opFontColor,
  btnBorder,
  clearBtnBorder,
  calcBorder,
  calcDivider,
}) => {
  const [state, setState] = useState("0");
  const [calculation, setCalculation] = useState("");
  const config = {};
  const math = create(all, config);
  const handleClick = (e) => {
    const value = e.target.textContent;
    //when decimal val is entered, add it to zero
      if (
        value === "=" &&
        (state !== "+" ||
          state !== "-" ||
          state !== "*" ||
          state !== "/" ||
          state !== "=")
      ) {
        //Calc history

        const total = calculation + state;
        const lastIdx = total.length - 1;
        try {
        //Calculation checker
        math.round(math.evaluate(total))
        setCalculation((prev) =>
          prev.includes("=") ||
          prev[prev.length - 1] === "+" ||
          prev[prev.length - 1] === "-" ||
          prev[prev.length - 1] === "*" ||
          prev[prev.length - 1] === "/" 
            ? //Error source, need some kind of error handling
            `${prev}${state}=${
              math.round(math.evaluate(prev + state) * 10000) / 10000
            }`
            : ""
        );
          } catch {
            setCalculation("")
          }
        setState(() =>
          total.includes("=") ||
          total[lastIdx] === "+" ||
          total[lastIdx] === "-" ||
          total[lastIdx] === "*" ||
          total[lastIdx] === "/" ||
          total[lastIdx] === "±" ||
          total[lastIdx] === "."
            ? "0"
            : (math.round(math.evaluate(total) * 10000) / 10000).toString()
        );
      }
       

    if (
      calculation.includes("=") === true &&
      (value === "+" || value === "-" || value === "*" || value === "/")
    ) {
      setCalculation(state + value);
      setState(value);
    } else if (calculation.includes("=") === true) {
      setCalculation("");
      setState((prev) => (value === "±" ? prev : "0"));
    }
    if (
      value === "±" &&
      state !== "+" &&
      state !== "-" &&
      state !== "*" &&
      state !== "/"
    ) {
      setState((prev) => (prev[0] !== "-" ? `-${prev}` : prev.slice(1)));
    }

    //Num builder
    if (
      calculation.includes("=") &&
      (value !== "+" || value !== "*" || value !== "/" || value !== "-")
    ) {
      setState(value);
    } else if (
      state.includes(".") === false &&
      value !== "±" &&
      value !== "="
    ) {
      setState((prev) => prev + value);
    } else if (value !== "." && value !== "±" && value !== "=") {
      setState((prev) => prev + value);
    }
    if (
      state === "0" &&
      value !== "+" &&
      value !== "-" &&
      value !== "*" &&
      value !== "/" &&
      value !== "="
    ) {
      setState((prev) =>
        value === "±" && prev === "0"
          ? `-${prev}`
          : value === "±" && prev === "-0"
          ? prev
          : value
      );
      setCalculation("");
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
        lastChar === "*" ||
        lastChar === undefined
      ) {
        if (
          state === "+" ||
          state === "-" ||
          state === "*" ||
          state === "/" ||
          state === "." ||
          state === "-." ||
          state === "±" ||
          state === "="
        ) {
          setState(value);
        } else {
          setCalculation((prev) => prev + state + value);
          setState(value);
        }
      } else {
        setState(value);
      }
    } else {
      if (
        state === "+" ||
        state === "-" ||
        state === "*" ||
        state === "/" ||
        state === "±"
      ) {
        setState((prev) => (prev === "0" ? "0" : value));
      } else {
        if (
          value !== "0" ||
          value !== "+" ||
          value !== "-" ||
          value !== "*" ||
          value !== "/" ||
          value !== "="
        ) {
          if (value !== "=" && value !== "±" && value === ".") {
            setState((prev) => (value === "." ? prev : prev + value));
          }
        }
      }
    }
    if (value === "C") {
      setState("0");
      setCalculation("");
    }
  };
  return (
    <div className="calculator" style={{ borderColor: calcBorder }}>
      <div
        id="display"
        style={{ fontSize: "16px", height: "3.5vh", color: fontColor }}
      >
        {calculation}
      </div>
      <div id="display" style={{ color: fontColor }}>
        {state}
      </div>
      <div className="divider" style={{ backgroundColor: calcDivider }}></div>
      <div className="calculator-buttons">
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: clearBtnBorder,
          }}
          className="btn"
          id="clear"
          onClick={(e) => handleClick(e)}
        >
          C
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="conversion"
          onClick={(e) => handleClick(e)}
        >
          ±
        </button>
        <button
          style={{
            backgroundColor: opBtn,
            color: opFontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="divide"
          onClick={(e) => handleClick(e)}
        >
          /
        </button>
        <button
          style={{
            backgroundColor: opBtn,
            color: opFontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="multiply"
          onClick={(e) => handleClick(e)}
        >
          *
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="seven"
          onClick={(e) => handleClick(e)}
        >
          7
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="eight"
          onClick={(e) => handleClick(e)}
        >
          8
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="nine"
          onClick={(e) => handleClick(e)}
        >
          9
        </button>
        <button
          style={{
            backgroundColor: opBtn,
            color: opFontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="substract"
          onClick={(e) => handleClick(e)}
        >
          -
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="four"
          onClick={(e) => handleClick(e)}
        >
          4
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="five"
          onClick={(e) => handleClick(e)}
        >
          5
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="six"
          onClick={(e) => handleClick(e)}
        >
          6
        </button>
        <button
          style={{
            backgroundColor: opBtn,
            color: opFontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="add"
          onClick={(e) => handleClick(e)}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="one"
          onClick={(e) => handleClick(e)}
        >
          1
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="two"
          onClick={(e) => handleClick(e)}
        >
          2
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="three"
          onClick={(e) => handleClick(e)}
        >
          3
        </button>
        <button
          style={{
            backgroundColor: opBtn,
            color: opFontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="equal"
          onClick={(e) => handleClick(e)}
        >
          =
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="zero"
          onClick={(e) => handleClick(e)}
        >
          0
        </button>
        <button
          style={{
            backgroundColor: btn,
            color: fontColor,
            borderColor: btnBorder,
          }}
          className="btn"
          id="decimal"
          onClick={(e) => handleClick(e)}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
