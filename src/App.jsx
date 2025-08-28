import React from "react";
import MainPageLayout from "./layout/MainPageLayout";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Assignment2ToDoApp from "./assignhments/FunctionAssignments.jsx/.qodo/Assignment_2ToDoApp";
import Assignment1 from "./layout/Assignment1";
import Assigment3 from "./assignhments/FunctionAssignments.jsx/Assigment3"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<Hero />} />
          <Route path="counter-app" element={<Assignment1 />} />
          <Route path="todo-app" element={<Assignment2ToDoApp />} />
        </Route>
        <Route path="shoes-app" element={<Assigment3 />} />

      </Routes>
    </>
  );
};

export default App;
