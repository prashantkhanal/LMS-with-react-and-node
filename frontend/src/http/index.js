import axios from 'axios';
import url from './baseUrl';
const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
