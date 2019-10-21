import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.navigation}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          to="/pets"
          className={styles.link}
          activeClassName={styles.active}
        >
          Pets
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          to="/about"
          className={styles.link}
          activeClassName={styles.active}
        >
          About
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
