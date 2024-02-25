import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../partials/Home.css'; // Import CSS file for Home styles

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };
  return (
    <div className="home">
      <img src="/behance-64ca96ed5caf7.png" alt="Description of the image" className="background-image" />
      <div className="content">
        <div className="headline">
          <h3>Make</h3>
          <h3>International</h3>
          <h3>Friends</h3>
        </div>
        <div className="header">
          <h4>NetMates</h4>
        </div>
        <div className="border-box">
          <h2>NetMates</h2>
          <button className="Login" onClick={handleLogin}>Login</button>
          <button className="Register" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;