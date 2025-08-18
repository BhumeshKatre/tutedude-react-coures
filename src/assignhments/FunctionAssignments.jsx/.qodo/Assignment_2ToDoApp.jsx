import React, { useState } from "react";

const Assignment2ToDoApp = () => {
  const [task, setTask] = useState([]);
  const [newTask , setNewTask] = useState(null)


  const handleChange = (e) => {
    setNewTask(e.target.value);
  }
  
  const handleSubmit = () => {
    setTask([...task, newTask]);
    localStorage.setItem('tasks', task)
    setNewTask('')
  }

  return (
    <div className="grid grid-cols-2 mt-6   gap-3">
      <div className="grid-cols-6 border p-4">
        <h1 className="font-bold uppercase">Add Your Task</h1>
        <div className=" flex justify-between gap-4 ">
          <input
            onChange={handleChange}
            className="w-full bg-gray-300 p-1 outline-none rounded-md"
            type="text"
            name="task"
            id=""
            placeholder="Enter Your Task here"
          />
          <button
            onClick={handleSubmit}        
            className="w-20 text-center font-bold bg-black text-white rounded-md">
            ADD
          </button>
        </div>
        <div>
          <h2>Note</h2>
          <ul className="space-y-2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>

      <div className="grid-cols-6 border p-4 ">
        <h1 className="font-bold">Your Task</h1>
        <div className="overflow-y-auto">
          <ol typeof="1">
            <li className="flex justify-between ">
              <p>Task-1</p>
              <div className="flex gap-3">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </li>
            <li>Task-1</li>
            <li>Task-1</li>
            <li>Task-1</li>
            <li>Task-1</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Assignment2ToDoApp;
