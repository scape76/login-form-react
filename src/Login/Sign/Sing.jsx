import React from "react";
import NewAccountBtn from "./NewAccountBtn";

const logUsersData = (email, password) => {
  (email === '' || password === '') ? alert('You didn\'t fill in the form properly')
  : alert(`your email: ${email}; password: ${password}`);
}

const Sign = ({email, password}) => {
  return (
    <>
    <button className="login__sign btn" 
    onClick={() => logUsersData(email, password)}>
      Log in
    </button>
    <button className="login__sign-google btn">
      <i className="fa-brands fa-google"></i>
      Log in with Google
    </button>
    <NewAccountBtn/>
    </>
  );
} 

export default Sign;