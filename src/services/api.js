import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://json-server-kenziegroup.herokuapp.com/',
});
