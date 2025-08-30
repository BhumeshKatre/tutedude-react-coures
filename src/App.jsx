import React from "react";
import MainPageLayout from "./layout/MainPageLayout";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Assignment1 from "./layout/Assignment1";
import Assignment2ToDoApp from './assignhments/FunctionAssignments.jsx/Assignment_2ToDoApp';
import Assignment3 from "./assignhments/FunctionAssignments.jsx/Assigment3/index"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<Hero />} />
          <Route path="counter-app" element={<Assignment1 />} />
          <Route path="todo-app" element={<Assignment2ToDoApp />} />
        </Route>
        <Route path="shoes-app" element={<Assignment3 />} />

      </Routes>
    </>
  );
};

export default App;
