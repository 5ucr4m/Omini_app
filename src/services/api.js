import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'http://192.168.5.105:3333',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token.token}`;
  }

  return { ...config, headers };
});

export default api;
