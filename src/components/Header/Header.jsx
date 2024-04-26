import React from 'react';
import { NavLink } from 'react-router-dom';
import tmdbLogo from 'img/tmdb.svg';
import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={tmdbLogo} alt="TMDB Logo" className={styles.logoImg} />
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styles.link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
