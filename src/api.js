
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchChannelData = () => {
  return api.get('/products'); 
};


export const fetchTopFiveProducts = () => {
    return api.get('/topFive');
}

export const fetchCostRevernewData = () => {
    return api.get("/api/revenue-cost-data");
}

export const fetchSearchNearestData = (query) => {
  return axios.get('api/nearest', {
    params: { query }
  });
};

export const fetchLogin =(values) => {
  return axios.post('api/login',{
    params: {values}
  })
}