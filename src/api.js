
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

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

export const fetchInventoryLogin = async (values) => {
  try {
      const response = await axios.post('api/inventory/login', values);
      return response;
  } catch (error) {
      console.error('Error during API request:', error);
      throw error;  
  }
};

export const fetchAdminLogin = async (values) => {
  try {
      const response = await axios.post('http://localhost:8080/api/admin/login', values);
      return response;
  } catch (error) {
      console.error('Error during API request:', error);
      throw error;  
  }
};