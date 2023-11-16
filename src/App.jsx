import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Trondheim } from "./render/cities/Trondheim";
import { Oslo } from "./render/cities/Oslo";
import { Stavanger } from "./render/cities/Stavanger";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Trondheim />} />
          <Route path="Oslo" element={<Oslo />} />
          <Route path="Stavanger" element={<Stavanger />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
