import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import AboutPage from "./components/AboutPage";
import Skills from "./components/Skills";
import "./styles/App.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </Router>
);