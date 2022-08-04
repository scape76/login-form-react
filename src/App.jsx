import React from 'react';
import Image from './Image/Image';
import LoginCard from './Login/LoginCard';

const App = () => {
  return (
    <div className='login'>
      <LoginCard/>
      <Image/>
    </div>
  );
}

export default App;