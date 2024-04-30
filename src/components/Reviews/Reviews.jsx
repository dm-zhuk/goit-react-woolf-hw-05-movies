import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/services/api';
import styles from './index.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch {
        console.error();
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ul className={styles.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li className={styles.reviewsItem} key={review.id}>
              <h4 className={styles.reviewsAuthor}>{review.author}</h4>
              <p className={styles.reviewsContent}>{review.content}</p>
            </li>
          ))
        ) : (
          <h5>No reviews yet. Be the first one to write.</h5>
        )}
      </ul>
    </>
  );
};

export default Reviews;
