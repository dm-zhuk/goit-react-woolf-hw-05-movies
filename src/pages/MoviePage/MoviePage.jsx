import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './index.module.css';

const MoviePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  console.log(location.state);

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery)
        .then(({ response }) => {
          setSearchRes(response);
        })
        .catch(console.error);
    }
  }, [searchQuery]);

  const handleSearch = async e => {
    e.preventDefault();
    if (!query) return;
    try {
      const { response } = await searchMovies(query);
      setSearchRes(response);
      navigate(`/movies?query=${query}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearch}>
          <input
            className={styles.searchInput}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search movies..."
          />
          <button className={styles.searchButton} type="submit">
            <img src="" alt="" />
          </button>
        </form>
      </div>
      <MoviesList movies={searchRes} />
    </>
  );
};

export default MoviePage;
