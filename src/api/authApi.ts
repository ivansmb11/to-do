import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:3000/api/v1/auth',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default authApi
