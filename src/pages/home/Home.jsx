import React from "react";
import "./styles/Home.css";
import logo from "./images/logo.png";
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
        <div class="hero__content">
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
            <button className="hero__started">Get Started</button>
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
