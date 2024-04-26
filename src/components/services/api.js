//
import { toast } from 'react-toastify';
//
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '6b4e8c9fa955da636e2add3fea0fdd83',
};

export const fetchTrending = async () => {
  try {
    const response = await axios.get('/trending/all/day');
    return response.data.results;
  } catch (error) {
    toast.error('Error fetching movie trends');
    throw new Error(error);
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    toast.error('Error searching movies');
    throw new Error(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    toast.error('Error fetching movie details');
    throw new Error(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    toast.error('Error fetching movie credits');
    throw new Error(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    toast.error('Error fetching movie reviews');
    throw new Error(error);
  }
};
