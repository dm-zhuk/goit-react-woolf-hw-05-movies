import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getMovieCredits } from 'components/services/api';
import styles from './index.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const imgDefault = 'https://placehold.it/90x120';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const dataCast = await getMovieCredits(movieId);
        setCast(dataCast.cast);
      } catch {
        console.error();
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.castSection}>
      <h2>Top Billed Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : imgDefault
              }
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

/* На сторінках Cast, Reviews в масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
const { movieId } = useParams();
useEffect(() => {
if (!movieId) return;
}, [movieId]); */
