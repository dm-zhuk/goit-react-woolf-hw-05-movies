import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies, handleApiError } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './index.module.css';

const MoviePage = () => {
  const [query, setQuery] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        try {
          const { results } = await searchMovies(searchQuery);
          setSearchRes(results);
        } catch (error) {
          setErrorMsg(
            handleApiError(error, 'Error fetching the movie you requested')
          );
        }
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = e => {
    e.preventDefault();
    if (!query) return;
    setSearchParams({ query });
    setQuery('');
  };

  if (errorMsg) {
    return (
      <div className={styles.wrapper}>
        <div>{errorMsg}</div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input
            className={styles.searchInput}
            type="text"
            autoComplete="off"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button className={styles.searchButton} type="submit"></button>
        </form>
      </div>
      <MoviesList movies={searchRes} />
    </>
  );
};

export default MoviePage;
