import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5080/api/'
});

export default api;