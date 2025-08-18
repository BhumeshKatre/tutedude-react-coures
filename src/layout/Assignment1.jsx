import React from 'react';
import Assignment1Counter from '../assignhments/FunctionAssignments.jsx/.qodo/Assignment_1Counter';
import Assignment2ToDoApp from '../assignhments/FunctionAssignments.jsx/.qodo/Assignment_2ToDoApp';
import Assignment1CounterClass from '../assignhments/ClassAssignments.jsx/Assignment1CounterClass';

const Assignment1 = () => {
  return (
    <div className='flex gap-4 '>
      <Assignment1Counter />
      <Assignment1CounterClass />
    </div>
  );
}

export default Assignment1;
