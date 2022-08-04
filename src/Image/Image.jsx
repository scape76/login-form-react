import React from 'react';
import mainImage from './Frame1.png'

const Image = () => {
  const image = <img id='main-image' src={mainImage} alt="Nft"/>;
  return (
    <div className='image'>
      {image}
    </div>
  );
}

export default Image;