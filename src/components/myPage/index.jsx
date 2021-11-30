import React from "react";
import AboutUS from "../aboutUs";
import ContactUs from "../contactUs";
import HomePage from "../home";
import Navbar from "../navbar";
import { Routes, Route } from "react-router-dom";
function MyPage() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default MyPage;
