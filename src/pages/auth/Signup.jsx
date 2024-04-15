import React from "react";
import "./styles/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section id="signup">
      <div className="signup__container">
        <div className="form__top">
          <p className="form__title">Sign up</p>
          <p className="form__description">Create your account in seconds.</p>
        </div>
        <form action="">
          <p className="form__error">Invalid account information</p>
          <div className="form__div">
            <input
              type="text"
              placeholder="First Name"
              className="form__input"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form__input"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className="form__input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form__input"
              required
              minLength={6}
            />
          </div>
          <button className="form__button">Sign up</button>
          <div className="form__flex">
            <p className="form__other">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
