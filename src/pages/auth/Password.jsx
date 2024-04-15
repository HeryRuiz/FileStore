import React from 'react'
import { Link } from 'react-router-dom'

function Password(){
  return (
    <section id="signup">
    <div className="signup__container">
      <div className="form__top">
        <p className="form__title">Password</p>
        <p className="form__description">Reset your password with one email.</p>
      </div>
      <form action="">
        <p className="form__good">Successfully sent reset</p>
        <div className="form__div">
          <input
            type="email"
            placeholder="Email"
            className="form__input"
            required
          />
        </div>
        <button className="form__button">Submit</button>
        <div className="form__flex">
          <p className="form__other">
            Remember your password? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Password
