import React, { useState } from "react";
import logo from "./images/logo.png";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import avatar from '../home/images/avatar.png'
import {auth} from "../firebase/firebase";
function Nav({ signedin }) {
  return (
    <header>
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__left">
            <img src={logo} alt="FileStore Logo" />
            <p className="nav__title">Filestore</p>
          </Link>
          {signedin ? (
            <img src={avatar} alt="avatar" className="nav__avatar"/>
          ) : (
            <Link to="/login" className="nav__right">
              <button className="nav__signin">Sign In</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
