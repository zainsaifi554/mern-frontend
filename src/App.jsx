import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';  // ✅ Fixed casing
import Home from './components/Home.jsx';
import Navbar from './navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
