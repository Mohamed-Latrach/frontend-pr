import React, { useState } from 'react';
import styles from '../partials/Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../store/userActions';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' || birthdate === '' || gender === '') {
      console.log('Please fill in all required fields');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await dispatch(userRegister({ firstName, lastName, email, password, birthdate, gender })).unwrap();
      navigate('/HomePage');
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.backgroundImage}>
        <img src="/behance-64ca96ed5caf7.png" alt="Description of the image" className={styles.backgroundImage} />
      </div>
      <div className={styles.borderBox}>
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>
              <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="firstName" />
            </div>
            <div className={styles.inputLastName}>
              <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" />
            </div>
          </div>
          <div className={styles.inputBox}>
            <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          </div>
          <div className={styles.inputBox}>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
          </div>
          {/* Birthday Picker */}
          <div className={styles.inputBox}>
            <label htmlFor="birthdate">Birthday:</label>
            <input type="date" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} autoComplete="bday" />
          </div>
          {/* Gender Selector */}
          <div className={styles.inputBox}>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} autoComplete="sex">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          <button type="submit" className={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
