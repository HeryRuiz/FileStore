import React from "react";
import logo from "./images/logo.png";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { auth } from "../firebase/firebase";
function Nav({ signedin }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
        return;
      })
      .catch((error) => {
        return;
      });
  };

  return (
    <header>
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__left">
            <img src={logo} alt="FileStore Logo" />
            <p className="nav__title">Filestore</p>
          </Link>
          {signedin ? (
            <div className="signout__div">
              <button className="signout" onClick={handleSignOut}>
                <LogOut />
                Sign Out
              </button>
            </div>
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
