import React, { useState, useEffect } from 'react';
import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/services/api';
import styles from './index.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation;

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  const urlPoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/path-to-default-image.jpg';

  const backLink = location.state?.from ?? '/';

  return (
    <div className={styles.container}>
      <NavLink to={backLink} state={location.state} className={styles.backLink}>
        🔙 Go back
      </NavLink>
      <div className={styles.detailsWrapper}>
        <img
          src={urlPoster}
          alt={movie.title}
          className={styles.poster}
          // style={{ backgroundImage: `url(${props => props.src})` }}
        />
        <section className={styles.movieContent}>
          <div className={styles.movieTitle}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </div>
          <div className={styles.flex}>
            <span className={styles.subTitleScore}>User Score:</span>
            <p className={styles.overview}>
              {' '}
              {Math.round(movie.vote_average * 10)}%
            </p>
          </div>
          <span className={styles.subTitle}>
            Overview:
            <p className={styles.overview}> {movie.overview}</p>
          </span>
          <span className={styles.subTitle}>
            Genre:{' '}
            <p className={styles.overview}>
              {' '}
              {movie.genres
                ? movie.genres.map(genre => genre.name).join(', ')
                : 'N/A'}
            </p>
          </span>
        </section>
      </div>
      <div className={styles.addInfo}>
        <h3>Additional information</h3>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <NavLink
              to="cast"
              state={{ from: backLink }}
              className={styles.backLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.infoItem}>
            <NavLink
              to="reviews"
              state={{ from: backLink }}
              className={styles.backLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

// * На сторінках MoviesDetails, Cast, Reviews в масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
/* const { movieId } = useParams();
useEffect(() => {
if (!movieId) return;
}, [movieId]);

//  Коли додаємо функціонал кнопки повернення назад, перевіряти, що точно є значення from в location.state
const location = useLocation();
const backLink = location.state?.from ?? '/';
 */
