import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
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

const AppContainer = ({ isAuthenticated }) => {
  return (
    <div className="app">
      <Router>
        {/* Render Sidebar */}
        {isAuthenticated && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/HomePage" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/HomePage" />} />
          <Route path="/homePage" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/edit" element={isAuthenticated ? <Edit /> : <Navigate to="/login" />} />
          {/* Implement logout functionality */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

const AppConnected = connect(mapStateToProps)(AppContainer);

function App() {
  return (
    <Provider store={store}>
      <AppConnected />
    </Provider>
  );
}

export default App;