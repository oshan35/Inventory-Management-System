
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchChannelData = () => {
  return api.get('/products'); 
};


