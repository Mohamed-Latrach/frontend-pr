import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaCog, FaPowerOff } from 'react-icons/fa';
import styles from './Sidebar.module.css';
import { logout } from '../store/userSlice';

function Sidebar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className={styles['main-menu']}> 
      <ul>
        <li>
          <NavLink to="/HomePage" activeClassName="activeClicked">
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
            <span className={styles['nav-text']}>Notes</span>
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
        <li onClick={handleLogout}>
          <a>
            <FaPowerOff className={`${styles['nav-icon']} ${styles['nav-text']}`} />
            <span className={styles['nav-text']}>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
