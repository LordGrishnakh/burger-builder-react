import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-af019.firebaseio.com/'
});

export default instance;