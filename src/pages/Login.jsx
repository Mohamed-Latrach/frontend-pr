import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../store/userSlice'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import styles from '../partials/Login.module.css'; 


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "" || password.trim() === "") {
            return;
        }
        dispatch(requestLogin({ email, password })); 
        navigate("/homepage");
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
                    <Button variant="primary" type="submit" className={styles.button}>Login</Button>
                </div>
            </div>
        </Form>
    );
}

export default Login;
