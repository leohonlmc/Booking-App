import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, MyBooking, NewBooking } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/MyBooking" element={<MyBooking />} />
        <Route exact path="/NewBooking" element={<NewBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
