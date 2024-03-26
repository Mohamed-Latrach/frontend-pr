
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Edit from './pages/Edit';

import './partials/Home.module.css';
import './partials/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          {/* Render Sidebar */}
          <Sidebar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/edit" element={<Edit />} />
            {/* Implement logout functionality */}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
