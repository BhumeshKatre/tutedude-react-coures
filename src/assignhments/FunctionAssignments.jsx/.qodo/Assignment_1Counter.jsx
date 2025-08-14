import React, { useState } from 'react';

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
    <div className='flex justify-center items-center h-screen w-screen gap'>

      <button
        className='bg-red-400 text-white font-bold text-2xl rounded-tl-2xl rounded-bl-2xl px-5' onClick={handleMinussBtn}>-</button>
      <p className='px-5 '>{addNumber}</p>
      <button
        className='bg-green-400 text-white font-bold text-2xl rounded-tr-2xl rounded-br-2xl px-5'
        onClick={handlePlusBtn}>+</button>

    </div>
  );
}

export default Assignment1Counter;
