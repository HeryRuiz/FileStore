import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
function Password() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = document.querySelector(".pass__input");
    const email = emailInput.value.trim();
    try {
      await sendPasswordResetEmail(auth, email);
      document.querySelector(".form__good").style.opacity = "1";
    } catch (error) {
      console.error("Error sending password reset email: ", error);
    }
    emailInput.value = "";
  };

  return (
    <section id="password">
      <div className="password__container">
        <div className="form__top">
          <p className="form__title">Password</p>
          <p className="form__description">
            Reset your password with one email.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <p className="form__good">Password reset sent.</p>
          <div className="form__div">
            <input
              type="email"
              placeholder="Email"
              className="form__input pass__input"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit" className="form__button">
            Submit
          </button>
          <div className="form__flex">
            <p className="form__other">
              Remember your password? <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Password;
