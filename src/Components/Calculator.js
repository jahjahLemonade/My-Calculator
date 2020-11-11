import React, { useState } from "react";
import "../css/Calculator.css";

const Calculator = () => {
  const [state, setState] = useState(0);
  const [calculation, setCalculation] = useState("")
  
  const handleClick = (e) => {
    const value = e.target.textContent
    if(state === 0) {
      setState(value)
    }
    else {
      setState(prev => prev + value)
    }
   
    if(value === "C") {
      setState(0)
      setCalculation("")
    }
    else if(value === "+" || value === "-" || value === "/" || value === "*") {
      setCalculation(prev => prev + state + value)
      setState(value)
    }

  }
  return (
    <div className="calculator">
       <div id="display">{calculation}</div>
        <div id="display">{state}</div>
        <div className="divider"></div>
        <div className="calculator-buttons">
          <button className="btn" id="clear">C</button>
          <button className="btn" id="blank-space">n/a</button>
          <button className="btn" id="divide">/</button>
          <button className="btn" id="multiply">*</button>
          <button className="btn" id="seven">7</button>
          <button className="btn" id="eight">8</button>
          <button className="btn" id="nine">9</button>
          <button className="btn" id="substract">-</button>
          <button className="btn" id="four">4</button>
          <button className="btn" id="five">5</button>
          <button className="btn" id="six">6</button>
          <button className="btn" id="add">+</button>
          <button className="btn" id="one">1</button>
          <button className="btn" id="two">2</button>
          <button className="btn" id="three">3</button>
          <button className="btn" id="equal">=</button>
          <button className="btn" id="zero">0</button>
          <button className="btn" id="decimal">.</button>
        </div>
      {/* <div className="container">
        <div id="display">{calculation}</div>
        <div id="display">{state}</div>
        <div className="divider"></div>
        <div className="row">
          <div id="clear" className="col s2 offset-s2" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              C
            </h3>
          </div>
          <div className="col s2" id="blank-space">
            <h3>N/A</h3>
          </div>
          <div className="col s2" id="divide" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              /
            </h3>
          </div>
          <div className="col s2" id="multiply" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              *
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col s2 offset-s2" id="seven" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              7
            </h3>
          </div>
          <div className="col s2" id="eight" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              8
            </h3>
          </div>
          <div className="col s2" id="nine" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              9
            </h3>
          </div>
          <div className="col s2" id="substract" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              -
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col s2 offset-s2" id="four" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              4
            </h3>
          </div>
          <div className="col s2" id="five" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              5
            </h3>
          </div>
          <div className="col s2" id="six" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              6
            </h3>
          </div>
          <div className="col s2" id="add" onClick={(e) => handleClick(e)}>
            <h3 className="center-align">
              +
            </h3>
          </div>
        </div>
        <div className="row" id="bottom-row">
          <div className="col s7 offset-s2">
            <div className="row">
              <div className="col s4" id="one" onClick={(e) => handleClick(e)}>
                <h3 className="center-align">
                  1
                </h3>
              </div>
              <div className="col s4" id="two" onClick={(e) => handleClick(e)}>
                <h3 className="center-align">
                  2
                </h3>
              </div>
              <div className="col s4" id="three" onClick={(e) => handleClick(e)}>
                <h3 className="center-align">
                  3
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col s8" id="zero" onClick={(e) => handleClick(e)}>
                <h3 className="center-align">
                  0
                </h3>
              </div>
              <div className="col s4" id="decimal" onClick={(e) => handleClick(e)}>
                <h3 className="center-align">
                  .
                </h3>
              </div>
            </div>
          </div>
          <div className="col s3" id="equal">
            <h3 className="center-align" onClick={(e) => handleClick(e)}>
              =
            </h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Calculator;
