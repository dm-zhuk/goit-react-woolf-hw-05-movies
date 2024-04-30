import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchMovies, handleApiError } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './index.module.css';

const MoviePage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleSearch = async e => {
    e.preventDefault();
    if (!query) return;
    try {
      const { results } = await searchMovies(query);
      setSearchRes(results);
      navigate(`/movies?query=${query}`);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  if (errorMsg) {
    return (
      <div className={styles.wrapper}>
        <h2>😞 Error</h2>
        <div>{errorMsg}</div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearch}>
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
      {searchRes && <MoviesList movies={searchRes} />}
    </>
  );
};

export default MoviePage;
