import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/services/api';
import styles from './index.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const imgDefault = 'https://placehold.it/100x150';

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
      <h2 className={styles.castTitle}>Top Billed Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li className={styles.castItem} key={actor.cast_id}>
            <img
              className={styles.castImg}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : imgDefault
              }
              alt={actor.name}
            />
            <section className={styles.castSign}>
              <h5 className={styles.castName}>{actor.name}</h5>
              <h6 className={styles.castCharacter}>as {actor.character}</h6>
            </section>
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
