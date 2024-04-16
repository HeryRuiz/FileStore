import React, { useState } from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login">
      <div className="login__container">
        <div className="form__top">
          <p className="form__title">Login</p>
          <p className="form__description">
            Please enter your login details to sign in.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="form__error">{error}</p>}
          <div className="form__div">
            <input
              type="email"
              placeholder="Email address"
              className="form__input"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form__input"
              value={password}
              onChange={handlePasswordChange}
              required
              minLength={6}
            />
          </div>
          <button type="submit" className="form__button">
            Log In
          </button>
          <div className="form__flex">
            <p className="form__other">
              Don’t have an account? <Link to="/Signup">Sign Up</Link>
            </p>
            <Link to="/reset" className="form__forgot">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;