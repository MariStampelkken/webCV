import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.activeLink}`
                : styles.navbarLink
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.activeLink}`
                : styles.navbarLink
            }
          >
            About
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/CV"
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.activeLink}`
                : styles.navbarLink
            }
          >
            CV
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.activeLink}`
                : styles.navbarLink
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
