import React, { useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Navbar from "./Navbar";
import Customize from "./Customize";

const App = () => {
  const [buttonColor, setButtonColor] = useState();
  const [operatorButtonColor, setOperatorButtonColor] = useState();
  const [buttonFontColor, setButtonFontColor] = useState();
  const [operatorFontColor, setOperatorFontColor] = useState();
  const [buttonBorderColor, setButtonBorderColor] = useState();
  const [clearBtnBorderColor, setClearBtnBorderColor] = useState();
  const [calcBorderColor, setCalcBorderColor] = useState();
  const [calcDividerColor, setCalcDividerColor] = useState();
  // const [buttonFontStyle, setButtonFontStyle] = useState()
  const setColorOfButton = () => {
    const color = document.getElementById("button").value;
    setButtonColor(color);
  };
  const setColorOfOperators = () => {
    const color = document.getElementById("opBtn").value;
    setOperatorButtonColor(color);
  };
  const setColorOfFont = () => {
    const color = document.getElementById("font-color").value;
    setButtonFontColor(color);
  };
  const setColorOfOperatorFont = () => {
    const color = document.getElementById("op-font-color").value;
    setOperatorFontColor(color);
  };
  const setColorOfBtnBorder = () => {
    const color = document.getElementById("btn-border").value;
    setButtonBorderColor(color);
  };
  const setColorOfClearBtnBorder = () => {
    const color = document.getElementById("c-btn-border").value;
    setClearBtnBorderColor(color);
  };
  const setColorOfCalcBorder = () => {
    const color = document.getElementById("calc-border").value;
    setCalcBorderColor(color);
  };
  const setColorOfCalcDivider = () => {
    const color = document.getElementById("calc-divider").value;
    setCalcDividerColor(color);
  };
  return (
    <Router>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => (
          <Calculator
            btn={buttonColor}
            opBtn={operatorButtonColor}
            fontColor={buttonFontColor}
            opFontColor={operatorFontColor}
            btnBorder={buttonBorderColor}
            clearBtnBorder={clearBtnBorderColor}
            calcBorder={calcBorderColor}
            calcDivider={calcDividerColor}
          />
        )}
      />
      <Route
        exact
        path="/Customize"
        render={() => (
          <Customize
            btnCurrColor={buttonColor}
            btn={setColorOfButton}
            opCurrColor={operatorButtonColor}
            opBtn={setColorOfOperators}
            fontCurrColor={buttonFontColor}
            fontColor={setColorOfFont}
            opFontCurrColor={operatorFontColor}
            opFontColor={setColorOfOperatorFont}
            btnBorderCurrColor={buttonBorderColor}
            btnBorder={setColorOfBtnBorder}
            clearBtnBorderCurrColor={clearBtnBorderColor}
            clearBtnBorder={setColorOfClearBtnBorder}
            calcBorder={setColorOfCalcBorder}
            calcDivider={setColorOfCalcDivider}
          />
        )}
      />
    </Router>
  );
};

export default App;
