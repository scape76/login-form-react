import classNames from "classnames";
import React, {useState} from "react";


const LoginFormPass = ({password, handleChange}) => {
  const changeVisibility = (event) => {
    event.preventDefault();
    handleVisibility({isVisible: !isVisible, type: type === 'password' ? 'text' : 'password'})
  }
  
  const [{isVisible, type}, handleVisibility] = useState({isVisible: false, type: 'password'})
  const icon = isVisible ? 'fa-eye-slash' : 'fa-eye'  
  return (
  <div className="login-form-holder">
    <span className="login-form-holder__name">Password</span>
    <div className="login-form-holder__input">
      <input className="login-form-holder__input-value" type={type} placeholder="your password"
       onChange={(event) => handleChange(event.target.value)}
       value={password}/>
      <button className="login-form-holder__input-button"
      onClick={(event) => changeVisibility(event)}>
        <i className={classNames('fa-solid', icon)}></i>
      </button>
    </div>
  </div>
  )
}

export default LoginFormPass;