import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Adjust based on your backend URL

// Function to login user
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};
