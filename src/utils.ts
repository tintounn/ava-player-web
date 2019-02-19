import axios from "axios";

export function isProd() : boolean {
  return window.location.hostname !== 'localhost';
}

export function getApiBaseUrl() : string {
  return (!isProd()) ? `http://127.0.0.1:8000` : `https://player-api.qpismont.me`; 
}

export function request(options: any) : Promise<any> {
  options.url = getApiBaseUrl() + options.url;
  return axios(options);
}

export function getTokenData() : any {
  let token = getLocalStorageItem('token');
  let tokenData = {};

  if(token) {
    let tokenParts = token.split('.');
    tokenData = JSON.parse(atob(tokenParts[1])).data;
  }

  return tokenData;
}

export function getRoleId() : number {
  const data = getTokenData();
  return data['role'];
}

export function setLocalStorageItem(key: string, data: any) : void {
  try {
    let parsedData = JSON.stringify(data);
    data = parsedData;
  } catch (err) {}

  localStorage.setItem(key, data);
}

export function getLocalStorageItem(key: string) : any {
  let data: any = localStorage.getItem(key);
  
  try {
    let parsedData = JSON.parse(data);
    data = parsedData;
  } catch (err) {}

  return data;
}

export function getTmdbPosterBaseUrl() : string {
  return 'https://image.tmdb.org/t/p/w500';
}

export function clearLocalStorage() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}