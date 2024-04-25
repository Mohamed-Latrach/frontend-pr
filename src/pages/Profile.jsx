import React, { useState, useEffect } from 'react';
import styles from '../partials/Profile.module.css';
import { Link } from 'react-router-dom';
import AvatarPickingFile from './ImageUpload';
import Textarea from '@mui/joy/Textarea';

function Profile() {
  const [profileData, setProfileData] = useState({ aboutMe: '', username: '', name: '' });
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    // Retrieve data from local storage
    const storedProfileData = JSON.parse(localStorage.getItem('profileData'));
    if (storedProfileData) {
      setProfileData(storedProfileData);
    }
  }, []);

  // Function to handle post upload
  const handlePostUpload = async () => {
    try {
      // Perform any necessary validation
      // Upload post content to your backend server using axios or fetch
      // Example:
      // await axios.post('http://localhost:3000/api/posts', { content: postContent });
      // Optionally, you can reset the postContent state after successful upload
      setPostContent('');
    } catch (error) {
      console.error('Error uploading post:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div>
      <div className={styles['box-sizing']}>
        <h2>Hi, This is your Profile</h2>
        <Link to="/edit">
          <button>Edit</button>
        </Link>
        <div className={styles['content']}>
          {/* Display profile data */}
          <p>About Me: {profileData.aboutMe}</p>
          <p>Username: {profileData.username}</p>
          <p>Name: {profileData.name}</p>
        </div>
        <div className={styles['top-right']}>
          <AvatarPickingFile /> {/* Include your custom image upload component */}
        </div>
        <div className={styles['post']}>
          <h3>What's on your mind:</h3>
          <Textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            color="neutral"
            minRows={2}
            variant="outlined"
          />
          {/* Button to upload the post */}
          <button onClick={handlePostUpload}>Upload Post</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
