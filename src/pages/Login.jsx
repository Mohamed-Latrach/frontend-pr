import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/userSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import styles from '../partials/Login.module.css'; 

function Login() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.user); // Accessing login status from Redux store
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(userLogin({ email, password }));
    };

    return (
        <Form onSubmit={handleSubmit} className={styles.home}>
            <img src="/behance-64ca96ed5caf7.png" alt="image" className={styles['background-image']} />
            <div className={styles['border-box']}>
                <h2>Log Into Your Account</h2>
                <Form.Group controlId="formBasicEmail" className={styles['input-box']}>
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required
                        variant="soft"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className={styles['input-box']}>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required
                    />
                </Form.Group>
                <div className={styles['button-container']}>
                    <Button variant="primary" type="submit" className={styles.button} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </div>
                {error && <div className={styles.error}>{error}</div>}
            </div>
        </Form>
    );
}

export default Login;
