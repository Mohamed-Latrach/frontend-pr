import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../partials/Home.module.css'; // Import CSS module for Home styles

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styles.home}>
      <img src="/behance-64ca96ed5caf7.png" alt="Description of the image" className={styles['background-image']} />
      <div className={styles.content}>
        <div className={styles.headline}>
          <h3>Make</h3>
          <h3>International</h3>
          <h3>Friends</h3>
        </div>
        <div className={styles.header}>
          <h4>NetMates</h4>
        </div>
        <div className={styles['border-box']}>
          <h2>NetMates</h2>
          <button className={`${styles.button} ${styles.Login}`} onClick={handleLogin}>Login</button>
          <button className={`${styles.button} ${styles.Register}`} onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
