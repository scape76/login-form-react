import React from "react";

const LoginFormAccess = () => {
  return (
  <div className="login-form__access">
    <div className="login-form__access-remember">
      <input className="login-form__remember-checkbox checkbox" type="checkbox"/>
      <span>Remember me</span>
    </div>
    <div className="login-form__access-forgot">
      <a className="link" href="#">
        <span>Forgot Password?</span>
      </a>
    </div>
  </div>  
  )
}

export default LoginFormAccess;