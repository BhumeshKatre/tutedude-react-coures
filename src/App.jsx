import React from "react";
import MainPageLayout from "./layout/MainPageLayout";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Assignment1Counter from "./assignhments/FunctionAssignments.jsx/.qodo/Assignment_1Counter";
import Assignment1CounterClass from "./assignhments/ClassAssignments.jsx/Assignment1CounterClass";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<Hero />} />
          <Route path="counter-app" element={<Assignment1Counter />} />
          <Route path="counter-app" element={<Assignment1Counter />} />
          <Route path="/classscomponent-assignment" element={<Assignment1CounterClass />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
