import axios from 'axios';

const toDoApi = axios.create({
  baseURL: 'http://localhost:3001/api/v1/todo',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default toDoApi;
