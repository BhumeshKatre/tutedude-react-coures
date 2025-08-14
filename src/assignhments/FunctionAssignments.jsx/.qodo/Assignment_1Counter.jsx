import React, { useState } from 'react';
import Title from '../../../Components/Title';
import { Link } from 'react-router-dom';

const Assignment1Counter = () => {
  const [addNumber, setAddNumber] = useState(0);

  const handlePlusBtn = () => {
    setAddNumber(addNumber + 1)
  }

  const handleMinussBtn = () => {
    addNumber > 0 ?
      setAddNumber(addNumber - 1) :
      alert('please add a number ')
  }

  return (
    <div className='flex justify-center items-center h-92  w-screen  '>
      <div className="flex flex-col gap-10 ">
        <div className='w-full text-center text-2xl  font-bold'>
          <Title Title={'Function - Counter App'} />
        </div>
        <div className='flex items-center justify-center '>
          <button
            className='bg-red-400 p-0 text-white font-bold text-2xl rounded-tl-2xl rounded-bl-2xl px-5' onClick={handleMinussBtn}>-</button>
          <p className='px-5 flex items-center'>{addNumber}</p>
          <button
            className='bg-green-400 text-white font-bold text-2xl rounded-tr-2xl rounded-br-2xl px-5'
            onClick={handlePlusBtn}>+</button>
        </div>
        <Link
          className='text-blue-500'
          to={'/classscomponent-assignment'}> Class Component - Counter App</Link>

      </div>
      

    </div>
  );
}

export default Assignment1Counter;
