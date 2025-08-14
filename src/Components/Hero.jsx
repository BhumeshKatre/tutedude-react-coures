import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex p-5 justify-between gap-4'>
    
      <div className="w-6/12 p-4 border border-gray-100 ">
        <h1 className='text-ellipsis text-2xl font-bold rounded-xl'>
          Assignment-
        </h1>
        <div className='p-4'>
          <ul>
            <li>Assignment-1 <Link to='/counter-app'>Counter app</Link></li>
            <li>Assignment-2</li>
            <li>Assignment-3</li>
            <li>Assignment-4</li>
          </ul>
        </div>
      </div>

      <div className=" w-6/12 border-1 p-4  border-gray-100 rounded-xl bg-gray-100">
        <h1 className='text-ellipsis text-2xl font-bold'>
          Chapter-
        </h1>
        <div className='p-4'>
          <ul>
            <li>Chapter-1</li>
            <li>Chapter-2</li>
            <li>Chapter-3</li>
            <li>Chapter-4</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
