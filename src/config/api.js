import axios from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: {
    /* setar headers aqui */
  }
});

// caso seja necessario setar o token na api
export const setTokenAPI = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default api;
