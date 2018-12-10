import * as axios from "axios";

export function isProd() {
  return window.location.hostname !== 'localhost';
}

export function request(options) {
  if(!options.url || !options.method) {
    return Promise.reject("Url or method parameter missing");
  }

  options.url = (!isProd()) ? `http://127.0.0.1:8080${options.url}` : null; 
  return axios(options);
}

export function getTokenData() {
  let token = getLocalStorageItem('token');
  let tokenData = {};

  if(token) {
    let tokenParts = token.split('.');
    tokenData = JSON.parse(atob(tokenParts[1])).data
  }

  return tokenData;
}

export function getRoleId() {
  const data = getTokenData();
  return data['role'];
}

export function setLocalStorageItem(key, data) {
  try {
    let parsedData = JSON.stringify(data);
    data = parsedData;
  } catch (err) {}

  localStorage.setItem(key, data);
}

export function getLocalStorageItem(key) {
  let data = localStorage.getItem(key);
  
  try {
    let parsedData = JSON.parse(data);
    data = parsedData;
  } catch (err) {}

  return data;
}

export function getTmdbPosterBaseUrl() {
  return 'https://image.tmdb.org/t/p/w500';
}
