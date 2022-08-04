import React from "react";
import NewAccountBtn from "./NewAccountBtn";

const Sign = () => {
  return (
    <>
    <button className="login__sign btn">Sign in</button>
    <button className="login__sign-google btn">
      <i className="fa-brands fa-google"></i>
      Sign in with Google
    </button>
    <NewAccountBtn/>
    </>
  );
} 

export default Sign;