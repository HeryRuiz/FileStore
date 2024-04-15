import React from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <section id="login">
      <div className="login__container">
        <div className="form__top">
          <p className="form__title">Login</p>
          <p className="form__description">
            Please enter your login details to sign in.
          </p>
        </div>
        <form action="">
          <p className="form__error">Invalid account information</p>
          <div className="form__div">
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
          <button className="form__button">Log In</button>
          <div className="form__flex">
            <p className="form__other">
            Don’t have an account? <Link to="/Signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
