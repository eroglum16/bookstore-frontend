import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
  );
}

export default App;
