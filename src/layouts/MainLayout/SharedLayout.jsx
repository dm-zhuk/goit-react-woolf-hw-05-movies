import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import tmdbLogo from 'img/tmovdb.svg';
import styles from './index.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <span>
          <img src={tmdbLogo} alt="TMDB Logo" className={styles.logoImg} />
        </span>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <section className={styles.homeSection}>
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayout;
