import React from "react";

const NewAccountBtn = () => {
  return (
  <div className="login__new-account">
    <span className="login__new-account-des">
      Don't have an account?
    </span>
    <button className="login__new-account-btn btn">
      <a className="link" href="#">
        Sign up
      </a>
    </button>
  </div>  
  );
}

export default NewAccountBtn