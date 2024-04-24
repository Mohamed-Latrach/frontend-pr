import React from 'react';
import styles from '../partials/Profile.module.css'
import { Link } from 'react-router-dom';
import AvatarPickingFile from  './ImageUpload';
import Textarea from '@mui/joy/Textarea';

function Profile() {
  return (
    <div>
      <div className={styles['box-sizing']}>
        <h2>Hi, This is your Profile</h2>
        <Link to="/edit">
          <button>Edit</button>
        </Link>
        <div className={styles['top-right']}>
                  <AvatarPickingFile /> {/* Include your custom image upload component */}
                </div>
        <div className={styles['post']}>
        <h3>What's on your mind:</h3>
        <Textarea
          color="neutral"
          minRows={2}
          variant="outlined"
        /></div>
      </div>
    </div>
  );
}

export default Profile;