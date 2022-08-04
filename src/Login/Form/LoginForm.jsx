import React from "react";
import LoginFormEmail from './LoginFormEmail';
import LoginFormPass from "./LoginFormPass";
import LoginFormAccess from "./LoginFormAccess";

const LoginForm = () => {
  return (
    <form id="login-form">
      <LoginFormEmail/>
      <LoginFormPass/>
      <LoginFormAccess/>
    </form>
  );
}

export default LoginForm;