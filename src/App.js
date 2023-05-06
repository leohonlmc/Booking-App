import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, MyBooking } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/MyBooking" element={<MyBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
