import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<hats />} />
      </Routes>
    </div>
  );
}

export default App;
