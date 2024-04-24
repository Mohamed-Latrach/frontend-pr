// Edit.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios

import styles from '../partials/Edit.module.css';

function Edit() {
  const [aboutMe, setAboutMe] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming axios.post('/api/profile') returns the updated profile data
      const updatedProfileData = await axios.post('/api/profile', {
        aboutMe,
        username,
        name,
      });
      // Redirect to profile page or handle success
    } catch (error) {
      // Handle error
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
