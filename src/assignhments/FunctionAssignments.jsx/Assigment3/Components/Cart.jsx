import React from 'react';
import LogoImg from '../img/logo.jpg'

const Cart = () => {
  return (
    <>
      <div>
        <h1 className='text-white font-bold px-5'>CART</h1>
        <div className=''>
          <div className='border-b-1 border-gray-300 p-4 text-white flex justify-between  items-center'>
            <img
              className='w-20 h-20'
              src={LogoImg} alt="" />
            
            <p >Lorem ipsum dolor sit amet.</p>
            <p>Price: 80</p>
            <div className='flex gap-2 items-center '>
              <button className='bg-orange-300 p-1 rounded-lg font-bold w-6'> + </button>
              <p>0</p>
              <button className='bg-orange-300  p-1 rounded-lg font-bold w-6'> - </button>
            </div>
          </div>
        </div>
        <div className='text-white'>
          <p>TOTAL : 80</p>
        </div>
      </div>
      
    </>
  );
}

export default Cart;
