import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import styled from "styled-components";

function App() {
  return (
    <div
      style={{
        margin: "10px 15%",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
