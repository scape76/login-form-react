import React from "react";
import LoginFormEmail from './LoginFormEmail';
import LoginFormPass from "./LoginFormPass";
import LoginFormAccess from "./LoginFormAccess";

const LoginForm = ({email, onEmailChange, password, onPasswordChange}) => {
  return (
    <form id="login-form">
      <LoginFormEmail
      email={email} 
      handleChange={onEmailChange}
      />
      <LoginFormPass
      password={password}
      handleChange={onPasswordChange}
      />
      <LoginFormAccess/>
    </form>
  );
}

export default LoginForm;