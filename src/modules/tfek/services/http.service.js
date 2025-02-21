import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpService.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Exemple de récupération d'un token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpService.noAuth = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpService;
