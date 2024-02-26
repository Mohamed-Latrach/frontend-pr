import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../partials/Login.module.css'; // Import CSS module

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("Login button clicked");
        navigate("/homepage");
    };

    return (
        <div className={styles.home}>
            <img src="/behance-64ca96ed5caf7.png" alt="Description of the image" className={styles['background-image']} />
            <div className={styles.header}>
                <h4>NetMates</h4>
            </div>
            <div className={styles['border-box']}>
                <h2>NetMates</h2>
                <div className={styles['input-box']}>
                    <input type="email" placeholder="Email" />
                </div>
                <div className={styles['input-box']}>
                    <input type="password" placeholder="Password" />
                </div>
                <div className={styles['button-container']}>
                    <button onClick={handleLogin} className={styles.button}>Login</button> {/* Apply CSS class to button */}
                </div>
            </div>
        </div>
    );
}

export default Login;
