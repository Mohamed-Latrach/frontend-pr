import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import HomePage from './pages/HomePage'; 
import './partials/Home.css'; 
import './partials/App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the root URL */}
          <Route path="/login" element={<Login />} /> {/* Route for the login page */}
          <Route path="/register" element={<Register />} /> {/* Route for the registration page */}          
          <Route path="/homepage" element={<HomePage />} /> {/* Route for the home page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
