import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Heroes from "./pages/Heroes.jsx";
import Hero from "./pages/Hero.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="hero/:id" element={<Hero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
