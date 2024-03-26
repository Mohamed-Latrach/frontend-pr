import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaCog, FaPowerOff } from 'react-icons/fa'; // Import required icons
import styles from './Sidebar.module.css';
import { logout } from '../store/userSlice';

function Sidebar() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <nav className={styles['main-menu']}> 
      <ul>
        <li>
          <NavLink to="/" activeClassName="activeClicked">
            <FaHome className={`${styles['nav-icon']} ${styles['nav-text']}`} />
            <span className={styles['nav-text']}>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Profile" activeClassName="activeClicked">
            <FaUser className={`${styles['nav-icon']} ${styles['nav-text']}`} />
            <span className={styles['nav-text']}>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Messages" activeClassName="activeClicked">
            <FaEnvelope className={`${styles['nav-icon']} ${styles['nav-text']}`} />
            <span className={styles['nav-text']}>Messages</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/Settings" activeClassName="activeClicked">
            <FaCog className={`${styles['nav-icon']} ${styles['nav-text']}`} />
            <span className={styles['nav-text']}>Settings</span>
          </NavLink>
        </li>
      </ul>

      <ul className={styles['logout']}>
        <li onClick={handleLogout} style={{ cursor: "pointer", color: 'red' }}>
          <a>
            <FaPowerOff className={`${styles['nav-icon']} ${styles['nav-text']}`} />
            <span className={styles['nav-text']}>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;
