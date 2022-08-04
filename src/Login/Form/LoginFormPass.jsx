import React from "react";

const LoginFormPass = () => {
  return (
  <div className="login-form-holder">
    <span className="login-form-holder__name">Password</span>
    <div className="login-form-holder__input">
      <input className="login-form-holder__input-value" type="password" placeholder="your password"/>
      <button className="login-form-holder__input-button"><i className="fa-solid fa-eye-slash"></i></button>
    </div>
  </div>
  )
}

export default LoginFormPass;