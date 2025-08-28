import React from 'react';
import LogoImg from '../img/logo.jpg'

const Card = () => {
  return (
    <div className='card bg-pink-400 p-4 rounded-sm'>
      <img
        className='w-full h-36'
        srcSet={LogoImg} alt="" />
      <div className='p-2'>
        <p>Lorem ipsum dolor sit  odit.</p>
        <p>$ 400 </p>
      </div>
      <div className='text-center'>
      <button className='px-2 py-2 bg-orange-200 font-bold rounded-lg hover:bg-orange-400 '>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
