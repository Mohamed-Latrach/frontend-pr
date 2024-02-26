import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../partials/Login.css';

function Login() {
    const navigate = useNavigate()
  const handleLogin = () => {
    console.log("Login button clicked");
    navigate("/homepage");
  };

  return (
    <div className="home">
      <img src="/behance-64ca96ed5caf7.png" alt="Description of the image" className="background-image" />
      <div className="header">
        <h4>NetMates</h4>
      </div>
      <div className="border-box">
        <h2>NetMates</h2>
        <div className="input-box">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
