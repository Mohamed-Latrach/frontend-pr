import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from '../partials/Edit.module.css';

function Edit() {
  const [aboutMe, setAboutMe] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/profile', { aboutMe, username, name });
      // Store data in local storage
      localStorage.setItem('profileData', JSON.stringify({ aboutMe, username, name }));
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles['box-sizing']}>
        <h2>Edit your profile:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="aboutMe">About me:</label>
            <textarea
              id="aboutMe"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              maxLength={200}
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
