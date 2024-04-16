import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Password() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    setSuccessMessage('Successfully sent reset');
  };

  return (
    <section id="signup">
      <div className="signup__container">
        <div className="form__top">
          <p className="form__title">Password</p>
          <p className="form__description">Reset your password with one email.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {successMessage && <p className="form__good">{successMessage}</p>}
          <div className="form__div">
            <input
              type="email"
              placeholder="Email"
              className="form__input"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit" className="form__button">Submit</button>
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
