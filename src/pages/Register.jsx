import React from 'react';
import '../partials/Register.css';
import { useNavigate } from 'react-router-dom'


function Register() {
  return (
      <div className="border-box">
        <h2>Create New Account</h2>
        <div className="input-name">
          <input type="name" placeholder="name" />
          <div className="input-Last-Name">
          <input type="Name" placeholder="LastName" />
          <div className="input-box">
          <input type="email" placeholder="Email" />
          <div className="input-box">
          <input type="password" placeholder="Password" />

        </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Register; // Ensure you export the component as default
