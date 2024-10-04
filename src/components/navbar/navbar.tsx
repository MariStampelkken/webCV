import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link to="/" className={styles.navbarLink}>Home</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/about" className={styles.navbarLink}>About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/CV" className={styles.navbarLink}>CV</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/contact" className={styles.navbarLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;