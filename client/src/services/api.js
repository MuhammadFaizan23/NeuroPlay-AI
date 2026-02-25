import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchGames = () => api.get('/games');
export const fetchGame = (id) => api.get(`/games/${id}`);
export const fetchLeaderboard = () => api.get('/leaderboard');
export const fetchSubscriptions = () => api.get('/subscriptions');
export const registerUser = (data) => api.post('/users/register', data);
export const loginUser = (data) => api.post('/users/login', data);

export default api;
