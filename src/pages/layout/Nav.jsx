import React from "react";
import logo from "./images/logo.png";
import "./styles/Nav.css";
function Nav() {
  return (
    <header>
      <nav>
        <div className="nav__container">
          <div className="nav__left">
            <img src={logo} alt="FileStore Logo" />
            <p className="nav__title">Filestore</p>
          </div>
          <div className="nav__right">
            <button className="nav__signin">Sign In</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
