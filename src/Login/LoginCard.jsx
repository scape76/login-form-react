import React from 'react';
import Title from './Title/Title'
import LoginForm from './Form/LoginForm';
import Sign from './Sign/Sing';
const LoginCard = () => {
  return (
    <div className='login-card'>
      <Title/>
      <LoginForm/>
      <Sign/>
    </div>    
  );
}

export default LoginCard;

