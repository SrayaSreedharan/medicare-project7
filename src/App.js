import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import Home from './pages/Home';
import Patient from './pages/Patient';
import Caretaker from './pages/Caretaker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/caretaker" element={<Caretaker />} />
      </Routes>
    </Router>
  );
}

export default App;
