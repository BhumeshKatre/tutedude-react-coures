import React from 'react';

const Navbar = () => {
  return (
    <header
      className='flex justify-between items-center p-4 shadow-5 bg-gray-100 rounded-sm  shadow '>
      <h1 className='font-bold uppercase '>
        <span className='underline '>Tutedude</span>-<span className='text-blue-600 underline-0'>React</span> 
      </h1>
      
    </header>
  );
}

export default Navbar;
