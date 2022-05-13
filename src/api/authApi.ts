import axios from 'axios';

const authApi = axios.create({
  baseURL:  `${ import.meta.env.VITE_REST_API_URI }/auth`,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default authApi
