import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  return (
    <div className={styles.header}>
      <ul className={styles.ulList}>
        {movies.map(({ id, poster_path, name, title }) => (
          <li className={styles.listItem} key={id}>
            <NavLink
              className={styles.link}
              to={`/movies/${id}`}
              state={{ from: location.pathname + location.search }}
            >
              <img
                className={styles.imgItem}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultImg
                }
                alt={name}
                width={250}
                height={330}
                loading="lazy"
              />
              <h3 className={styles.movieTitle}>{name || title}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
