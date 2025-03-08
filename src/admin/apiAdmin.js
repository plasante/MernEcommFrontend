import {API} from "../config";
import * as ROUTES from '../GlobalConstants/urls';

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export const createProduct = (userId, token, product) => {
  for(let pair of product.entries()) {
    console.log(pair[0]+ ', '+ pair[1]);
  }
  return fetch(`${API}${ROUTES.CREATE_PRODUCT}${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export const getCategories = () => {
  return fetch(`${API}${ROUTES.GET_CATEGORIES}`, {
    method: 'GET'
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}