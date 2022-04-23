import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Services1 from "../Components/Services1";
import Homepage from "../Pages/Homepage";
import Services from "../Pages/Services";

const Navigator = (props) => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Services1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigator;
