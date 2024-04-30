import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '6b4e8c9fa955da636e2add3fea0fdd83',
};

export const handleApiError = (error, errorMessage) => {
  return errorMessage;
};

export const fetchTrending = async () => {
  try {
    const results = await axios.get('/trending/all/day');
    return results.data.results;
  } catch (error) {
    return handleApiError(error, 'Error fetching movie trends');
  }
};

export const searchMovies = async query => {
  try {
    const results = await axios.get('/search/movie', { params: { query } });
    return results.data;
  } catch (error) {
    return handleApiError(error, 'Error searching movies');
  }
};

export const getMovieDetails = async movieId => {
  try {
    const results = await axios.get(`/movie/${movieId}`);
    return results.data;
  } catch (error) {
    return handleApiError(error, 'Error fetching movie details');
  }
};

export const getMovieCredits = async movieId => {
  try {
    const results = await axios.get(`/movie/${movieId}/credits`);
    return results.data;
  } catch (error) {
    handleApiError(error, 'Error fetching movie credits');
  }
};

export const getMovieReviews = async movieId => {
  try {
    const results = await axios.get(`/movie/${movieId}/reviews`);
    return results.data;
  } catch (error) {
    handleApiError(error, 'Error fetching movie reviews');
  }
};
