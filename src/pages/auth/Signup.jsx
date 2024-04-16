import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
 
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = ref(database, "users/" + user.uid);

      await set(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        files: [],
      });

      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setError(null);
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      setSuccess(false);
      document.querySelector('.form__error').style.opacity = '1'
    }
  };

  return (
    <section id="signup">
      <div className="signup__container">
        <div className="form__top">
          <p className="form__title">Sign up</p>
          <p className="form__description">Create your account in seconds.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <p className="form__error">{error}</p>
          <div className="form__div">
            <input
              type="text"
              placeholder="First Name"
              className="form__input"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form__input"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
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
            Sign up
          </button>
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
