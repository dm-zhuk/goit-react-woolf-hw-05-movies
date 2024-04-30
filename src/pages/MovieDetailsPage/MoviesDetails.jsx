import React, { Suspense, useState, useEffect, useRef } from 'react';
import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieDetails, handleApiError } from 'components/services/api';
import MovieAdditionalInfo from 'components/MovieAdditionalInfo/MovieAdditionalInfo';
import styles from './index.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const location = useLocation();
  const urlBackBtn = useRef(location.state?.from || '/');

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => {
        setErrorMsg(handleApiError(error, 'Error fetching movie details'));
      });
  }, [movieId]);

  if (errorMsg) {
    return (
      <div className={styles.wrapper}>
        <div>{errorMsg}</div>
      </div>
    );
  }

  if (!movie || !movie.title) {
    return (
      <>
        <h3 className={styles.err}>
          Sorry, detailed information for this movie is not available any
          longer. Try a new search.
        </h3>
      </>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.backBtnDiv}>
        <NavLink to={urlBackBtn.current} className={styles.link}>
          {''}
          🔙 Go back
        </NavLink>
        {movie && <MovieAdditionalInfo movie={movie} />}
        <Suspense
          fallback={
            <h2 style={{ margin: '96px 42px', color: '#1BB7DC' }}>
              Loading...
            </h2>
          }
        >
          <Outlet />
        </Suspense>
      </div>
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
const urlBackBtn = location.state?.from ?? '/';

<MoviesList movies={searchRes} />
Link to={`/movies/${movie.id}`}
state={{ from: location.pathname + location.search }}
<div className={styles.backBtnDiv}>
*/
