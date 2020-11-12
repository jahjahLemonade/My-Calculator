import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Navbar from "./Navbar";
import Customize from "./Customize";

const App = () => {
  return (
    <Router>
    <Navbar />
        <Route
          exact
          path="/"
          render={() => (
              <Calculator />
          )}
        />
        <Route
          exact
          path="/Customize"
          render={() => (
              <Customize />
          )}
        />
    </Router>
  );
};

export default App;
