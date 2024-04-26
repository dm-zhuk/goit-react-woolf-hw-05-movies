//  Створення списку фільмів на сторінках Home, Movies виносимо в окремий компонент MoviesList

// Ось простий спосіб перетворити екземпляр класу URLSearchParams у звичайний об'єкт із властивостями

/* const [searchParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams]
);
const { name, maxPrice, inStock } = params; */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        {movies.map(movie => (
          <li className={styles.listItem} key={movie.id}>
            <Link
              className={styles.link}
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname + location.search }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title || movie.name}
                width={250}
              />
              <h3 className={styles.movieTitle}>{movie.title || movie.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
