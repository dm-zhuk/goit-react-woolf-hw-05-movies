import React, { useState, useEffect } from 'react';
import { fetchTrending } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './index.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingToday = async () => {
      try {
        const response = await fetchTrending();
        setMovies(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    getTrendingToday();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>🔍 Trending Today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
