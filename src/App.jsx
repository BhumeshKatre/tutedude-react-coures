import React from "react";
import MainPageLayout from "./layout/MainPageLayout";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Assignment1Counter from "./assignhments/FunctionAssignments.jsx/.qodo/Assignment_1Counter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<Hero />} />
          <Route path="counter-app" element={<Assignment1Counter />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
