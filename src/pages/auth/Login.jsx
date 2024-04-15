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
          <div className="form__div">
            <input
              type="email"
              placeholder="Email address"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Password"
              className="form__input"
            />
          </div>
          <button className="form__button">Log In</button>
          <div className="form__flex">
            <p className="form__other">
              Don’t have an account? <Link to="signup">Sign up</Link>
            </p>
            <p className="form__forgot">Forgot password?</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
