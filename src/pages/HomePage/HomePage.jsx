import React, { useState, useEffect } from 'react';
import { fetchTrending, handleApiError } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './index.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getTrendingToday = async () => {
      try {
        const results = await fetchTrending();
        setMovies(results);
      } catch (error) {
        setErrorMsg(handleApiError(error, 'Error fetching trending movies'));
      }
    };

    getTrendingToday();
  }, []);

  if (errorMsg) {
    return (
      <div className={styles.err}>
        <h4>{errorMsg}</h4>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h2>🔍 Trending Today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
