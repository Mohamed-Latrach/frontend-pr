import React from 'react';
import '../partials/Login.css';

function Login() {
  // Function to handle login action
  const handleLogin = () => {
    // Add your login logic here, such as sending a request to your backend server
    console.log("Login button clicked");
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
