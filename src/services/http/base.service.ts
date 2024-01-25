import { LocalStorage } from '@/lib/utils';
import axios from 'axios';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const BASE_URI = 'http://localhost:8001';
export const BASE_URL = `${BASE_URI}/api/v1`;
const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});
api.interceptors.request.use(
  (config) => {
    // Retrieve user token from local storage
    const accessToken = LocalStorage.get('token');
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    // Set authorization header with bearer token

    return config;
  },
  (error) => {
    console.error(error);
    Promise.reject(error);
  }
);

export default api;
