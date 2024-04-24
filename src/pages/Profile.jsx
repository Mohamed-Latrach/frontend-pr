import React from 'react';
import styles from '../partials/Profile.module.css'
import { Link } from 'react-router-dom';
import MyCustomUpload from './MyCustomUpload'; // Import your custom upload component
import ImageUpload from './ImageUpload';
import Textarea from '@mui/joy/Textarea';

function Profile() {
  return (
    <div>
      <div className={styles['box-sizing']}>
        <h2>Hi, This is your Profile</h2>
        <Link to="/edit">
          <button>Edit</button>
        </Link>
        <MyCustomUpload /> {/* Include your custom upload component */}
        <ImageUpload /> {/* Include your custom image upload component */}
        <Textarea
          color="neutral"
          minRows={2}
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default Profile;