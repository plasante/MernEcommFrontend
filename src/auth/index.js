import {API} from "../config";

export const signUp = (user) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export const signIn = (user) => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/signout`, {
      method: 'GET',
    })
      .then(response => {
        console.log('signoujt', response);
      })
      .catch(err => console.log(err))
  }
}