import React, { useState } from 'react';
import Title from './Title/Title'
import LoginForm from './Form/LoginForm';
import Sign from './Sign/Sing';
const LoginCard = () => {
  const [email, onEmailChange] = useState('')
  const [password, onPasswordChange] = useState('')
  return (
    <div className='login-card'>
      <Title/>
      <LoginForm 
      email={email}
      onEmailChange={onEmailChange}
      password={password}
      onPasswordChange={onPasswordChange}/>
      <Sign email={email} password={password}/>
    </div>    
  );
}

export default LoginCard;

