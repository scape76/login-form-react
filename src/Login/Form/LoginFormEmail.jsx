import React from "react";

const handleDelete = (event, email, handleChange) => {
  event.preventDefault();
  email === '' 
  ? null 
  : handleChange('')
}

const LoginFormEmail  = ({email, handleChange}) => {
  return (
  <div className="login-form-holder">
    <span className="login-form-holder__name">Email</span>
    <div className="login-form-holder__input">
      <input className="login-form-holder__input-value" type="email" placeholder="my-email@example.com" 
      onChange={(event) => handleChange(event.target.value)}
      value={email}></input>
      <button className="login-form-holder__input-button" 
      onClick={(event) => handleDelete(event, email, handleChange)}>
        <i className="fa-solid fa-xmark"></i>
        </button>
    </div>
  </div>
  )
}

export default LoginFormEmail;