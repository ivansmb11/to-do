import axios from 'axios';

const toDoApi = axios.create({
  baseURL:  `${ import.meta.env.VITE_REST_API_URI }/todo`,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default toDoApi;
