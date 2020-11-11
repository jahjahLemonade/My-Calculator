import "../css/Customize.css";
const Customize = () => {
  const setBackgroundColor = () => {
    const color = document.getElementById("background").value;
    document.body.style.backgroundColor = color;
  };
  const setNavbarColor = () => {
    const color = document.getElementById("navbar").value;
    document.getElementsByTagName("nav")[0].style.backgroundColor = color;
  };
  return (
    <div className="container">
      <div className="row" id="custom">
        <div className="col s6">
          <h5 style={{ color: "white" }}>Background </h5>
          <input type="color" id="background" />
          <button
            className="btn-small"
            id="color-button"
            onClick={setBackgroundColor}
          >
            Color Change
          </button>
        </div>
        <div className="col s6">
          <h5 style={{ color: "white" }}>Navigation </h5>
          <input type="color" id="navbar" />
          <button
            className="btn-small"
            id="color-button"
            onClick={setNavbarColor}
          >
            Color Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
