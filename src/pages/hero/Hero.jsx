import React from "react";
import "./styles/Hero.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
function Home() {
  function setArrowStyle() {
    document.querySelector(`.hero__arrow`).style.left = "3px";
  }
  function resetArrowStyle() {
    document.querySelector(`.hero__arrow`).style.left = "0px";
  }

  return (
    <>
      <section id="hero">
        <div className="hero__content">
          <img src={logo} alt="FileStore Logo" />
          <p className="hero__heading">
            The easiest way to <br />
            upload and share files
            <br />
            with your company
          </p>
          <p className="hero__description">
            Make and account and start managing your files in less than a
            minute.
          </p>
          <div className="hero__div">
            <Link to='/home' className="hero__started">Get Started</Link>
            <button
              className="hero__learn"
              onMouseOver={()=> setArrowStyle()}
              onMouseOut={()=> resetArrowStyle()}
            >
              Learn more <span className="hero__arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
