import React from "react";

const LoginFormEmail = () => {
  return (
  <div className="login-form-holder">
    <span className="login-form-holder__name">Email</span>
    <div className="login-form-holder__input">
      <input className="login-form-holder__input-value" type="email" placeholder="my-email@example.com"/>
      <button className="login-form-holder__input-button"><i className="fa-solid fa-xmark"></i></button>
    </div>
  </div>
  )
}

export default LoginFormEmail;