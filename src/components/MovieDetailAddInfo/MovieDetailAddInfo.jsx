import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

const MovieDetailAddInfo = ({
  movie: { poster_path, title, overview, genres, release_date, vote_average },
}) => {
  const urlPoster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : '/path-to-default-image.jpg';

  return (
    <>
      <div className={styles.detailsWrapper}>
        <img
          src={urlPoster}
          alt={title}
          className={styles.poster}
          style={{ backgroundImage: `url(${props => props.src})` }}
        />
        <section className={styles.movieContent}>
          <div className={styles.movieTitle}>
            {title} ({new Date(release_date).getFullYear()})
          </div>
          <div className={styles.flex}>
            <span className={styles.subTitleScore}>User Score:</span>
            <p className={styles.overview}> {Math.round(vote_average * 10)}%</p>
          </div>
          <span className={styles.subTitle}>
            Overview:
            <p className={styles.overview}> {overview}</p>
          </span>
          <span className={styles.subTitle}>
            Genre:{' '}
            <p className={styles.overview}>
              {' '}
              {genres ? genres.map(genre => genre.name).join(', ') : 'N/A'}
            </p>
          </span>
        </section>
      </div>

      <div className={styles.addInfo}>
        <h3>Additional information</h3>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <NavLink to={'cast'} className={styles.link}>
              Cast
            </NavLink>
          </li>
          <li className={styles.infoItem}>
            <NavLink to={'reviews'} className={styles.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailAddInfo;
