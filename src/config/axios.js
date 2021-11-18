import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://dbmarket.herokuapp.com/api'
}) 

export default axiosClient;