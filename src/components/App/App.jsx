import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'normalize.css';

const SharedLayout = lazy(() => import('layouts/MainLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundP'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage/MoviesDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Suspense
      fallback={
        <h2 style={{ margin: '42px', color: '#1BB7DC' }}>Loading...</h2>
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
