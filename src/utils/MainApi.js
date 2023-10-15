import { API_URL } from '../components/constants/constants';

const headers = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const signUp = (data) => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};

export const signIn = (data) => {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const getUserInfo = () => {
  return fetch(`${API_URL}/users/me`, {
    credentials: 'include',
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};

export const updateUserInfo = (data) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};
