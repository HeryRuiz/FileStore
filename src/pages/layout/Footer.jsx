import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <Link to="/" className="footer__name">
            Filestore
          </Link>
          <div className="footer__div">
            <p>Privacy</p>
            <p>Terms of Service</p>
            <p>About</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
