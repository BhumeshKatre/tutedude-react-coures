import React from "react";
import Assignment1Counter from "../assignhments/FunctionAssignments.jsx/.qodo/Assignment_1Counter";
import Assignment1CounterClass from "../assignhments/ClassAssignments.jsx/Assignment1CounterClass";

const Assignment1 = () => {
  return (
    <div className="sm:block md:flex gap-4 p-2">
      <div className="md:w-[50%] ">
        <Assignment1Counter />
      </div>

      <div className="md:w-[50%] ">
        <Assignment1CounterClass />
      </div>
    </div>
  );
};

export default Assignment1;
