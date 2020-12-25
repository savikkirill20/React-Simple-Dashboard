import http from './http';
import TokenStorage from './TokenStorage';

const BASE_URL = 'https://app.allfactors.com/api/v1';

export const authenticate = (payload) => {
  return http.post('/auth/token/login/', payload).then((response) => {
    TokenStorage.setToken(response.data);

    return response;
  });
};

export const resetPassword = (payload) => {
  return http.post('/auth/password/reset/', payload);
};

export const getQuery = (endpoint) => http.get(endpoint);
export const patchQuery = (endpoint, data) => http.patch(endpoint, data);
