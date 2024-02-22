import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="app w-full h-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
