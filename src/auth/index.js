import {API} from "../config";
import * as ROUTES from '../GlobalConstants/urls';

export const signUp = (user) => {
  return fetch(`${API}${ROUTES.SIGNUP}`, {
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
  return fetch(`${API}${ROUTES.SIGNIN}`, {
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
    return fetch(`${API}${ROUTES.SIGNOUT}`, {
      method: 'GET',
    })
      .then(response => {
        //console.log('signout', response);
      })
      .catch(err => console.log(err))
  }
}

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }

  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
}