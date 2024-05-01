import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/services/api';
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
        setErrorMsg('An error occurred.');
      });
  }, [movieId]);

  if (errorMsg) {
    return (
      <div className={styles.err}>
        <h4>{errorMsg}</h4>
      </div>
    );
  }

  if (!movie || !movie.title) {
    return (
      <>
        <h4 className={styles.err}>
          Sorry, detailed information for this movie is no longer available. Try
          a new search.
        </h4>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.backBtnDiv}>
        <NavLink to={urlBackBtn.current} className={styles.link}>
          🔙 Go back
        </NavLink>
        <MovieAdditionalInfo movie={movie} />
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
