import { LocalStorage } from '@/lib/utils';
import axios from 'axios';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const BASE_URI =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : import.meta.env.VITE_API_URL;
export const BASE_URL = `${BASE_URI}/api/v1`;
// console.log('BASE_URI:::', BASE_URI);
// console.log(
//   'ENVS:::import.meta.env.VITE_NODE_ENV',
//   import.meta.env.VITE_NODE_ENV
// );
// console.log(
//   'ENVS:::import.meta.env.VITE_API_URL',
//   import.meta.env.VITE_API_URL
// );
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
