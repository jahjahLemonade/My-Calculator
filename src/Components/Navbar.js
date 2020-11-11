import {useEffect}from "react"
import { Link } from "react-router-dom";
import M from "materialize-css";
import "../css/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div>
      <ul className="sidenav" id="mobile-demo">
        <li>
        <Link className="sidenav-close" to="/">
          Calculator 
        </Link>
        </li>
    <li><div class="divider"></div></li>
        <li>
          <Link className="sidenav-close" to="/Customize">Customize</Link>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul class="left hide-on-med-and-down">
            <li>
              <Link to="/">
                Calculator
              </Link>
            </li>
            <li>
              <Link to="/Customize">
                Customize
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
