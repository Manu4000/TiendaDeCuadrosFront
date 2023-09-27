import React from 'react';
import Nav from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
    <Nav/>
    <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;