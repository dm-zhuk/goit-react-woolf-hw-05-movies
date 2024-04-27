import React from 'react';
import styles from './index.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>404 Not found</h1>
      <p>Page does not exist, please modify your search</p>
    </div>
  );
};

export default NotFoundPage;
