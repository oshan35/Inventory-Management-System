
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchChannelData = () => {
  return api.get('/products'); 
};


export const fetchTopFiveProducts = () => {
    return api.get('/topFive');
}

export const fetchCostRevernewData = (inventoryId) => {
  return api.get(`${API_BASE_URL}/api/inventory/cost-Revenue/${inventoryId}`);
}



// export const fetchSearchNearestInventories = (inventoryId,search) => {
//   return axios.get(`${API_BASE_URL}/api/inventory/by-productID/${inventoryId}/${search}`, {
//     params: { 'inventoryId':inventoryId,'productId': search}
//   });
// };

export const fetchSearchNearestInventories = (inventoryId, search) => {
  return axios.get(`${API_BASE_URL}/api/inventory/by-productID/${inventoryId}/${search}`);
};

export const fetchTransactionData = (inventoryId) => {
  return axios.get(`${API_BASE_URL}/api/inventory/transactions/${inventoryId}`)
}


export const fetchInventoryLogin = async (values) => {
  try {
      const response = await axios.post('http://localhost:8080/api/inventory/login', values);
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