import axios from "axios";


const api = axios.create({
    baseURL: 'localhost:5080/api/'
});

export default api;