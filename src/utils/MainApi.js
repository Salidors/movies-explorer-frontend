const apiBaseUrl = 'http://localhost:3102';
// const apiBaseUrl = 'https://api.arcana.nomoredomainsicu.ru';

const headers = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const signUp = (data) => {
  return fetch(`${apiBaseUrl}/signup`, {
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
  return fetch(`${apiBaseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const getUserInfo = () => {
  return fetch(`${apiBaseUrl}/users/me`, {
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
  return fetch(`${apiBaseUrl}/users/me`, {
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
