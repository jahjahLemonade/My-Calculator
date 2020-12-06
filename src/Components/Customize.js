import "../css/Customize.css";
const Customize = ({
  btnCurrColor,
  btn,
  opCurrColor,
  opBtn,
  fontCurrColor,
  fontColor,
  opFontCurrColor,
  opFontColor,
  btnBorderCurrColor,
  btnBorder,
  clearBtnBorderCurrColor,
  clearBtnBorder,
  calcBorder,
  calcDivider,

}) => {
  const setBackgroundColor = () => {
    const color = document.getElementById("background").value;
    document.body.style.backgroundColor = color;
  };
  const setNavbarColor = () => {
    const color = document.getElementById("navbar").value;
    document.getElementsByTagName("nav")[0].style.backgroundColor = color;
  };
  return (
    <div className="flexbox">
      <div className="customize">
        <button
          style={{
            backgroundColor: btnCurrColor,
            color: fontCurrColor,
            borderColor: btnBorderCurrColor,
          }}
          className="btn"
          id="seven"
        >
          7
        </button>
        <h5 style={{ color: "white" }}>Buttons</h5>
        <input type="color" id="button" />
        <button className="btn" id="color-button" onClick={btn}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <button
          style={{
            backgroundColor: opCurrColor,
            color: opFontCurrColor,
            borderColor: btnBorderCurrColor,
          }}
          className="btn"
          id="add"
        >
          +
        </button>
        <h5 style={{ color: "white" }}>Operator Buttons</h5>
        <input type="color" id="opBtn" />
        <button className="btn" id="color-button" onClick={opBtn}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <button
          style={{
            backgroundColor: btnCurrColor,
            color: fontCurrColor,
            borderColor: btnBorderCurrColor,
          }}
          className="btn"
          id="three"
        >
          3
        </button>
        <h5 style={{ color: "white" }}>Font Color</h5>
        <input type="color" id="font-color" />
        <button className="btn" id="color-button" onClick={fontColor}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <button
          style={{
            backgroundColor: opCurrColor,
            color: opFontCurrColor,
            borderColor: btnBorderCurrColor,
          }}
          className="btn"
          id="divide"
        >
          /
        </button>
        <h5 style={{ color: "white" }}>Operator's Font Color</h5>
        <input type="color" id="op-font-color" />
        <button className="btn" id="color-button" onClick={opFontColor}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <h5 style={{ color: "white" }}>Background </h5>
        <input type="color" id="background" />
        <button className="btn" id="color-button" onClick={setBackgroundColor}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <h5 style={{ color: "white" }}>Navigation </h5>
        <input type="color" id="navbar" />
        <button className="btn" id="color-button" onClick={setNavbarColor}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <h5 style={{ color: "white" }}>Calculator Border</h5>
        <input type="color" id="calc-border" />
        <button className="btn" id="color-button" onClick={calcBorder}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <h5 style={{ color: "white" }}>Calculator Divider</h5>
        <input type="color" id="calc-divider" />
        <button className="btn" id="color-button" onClick={calcDivider}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <button
          style={{
            backgroundColor: btnCurrColor,
            color: fontCurrColor,
            borderColor: btnBorderCurrColor,
          }}
          className="btn"
          id="one"
        >
          1
        </button>
        <h5 style={{ color: "white" }}>Button Border</h5>
        <input type="color" id="btn-border" />
        <button className="btn" id="color-button" onClick={btnBorder}>
          Color Change
        </button>
      </div>
      <div className="customize">
        <button
          style={{
            backgroundColor: btnCurrColor,
            color: fontCurrColor,
            borderColor: clearBtnBorderCurrColor,
          }}
          className="btn"
          id="clear"
        >
          C
        </button>
        <h5 style={{ color: "white" }}>Clear Button Border</h5>
        <input type="color" id="c-btn-border" />
        <button className="btn" id="color-button" onClick={clearBtnBorder}>
          Color Change
        </button>
      </div>
    </div>
  );
};

export default Customize;
