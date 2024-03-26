import React from 'react';
import styles from '../partials/Profile.module.css'
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <div className={styles['border-box']}>
        <h2>Hi, This is your Profile</h2> 
        <Link to="/edit">
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}


export default Profile;
