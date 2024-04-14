import React from "react";
import "./styles/Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__name">Filestore</p>
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