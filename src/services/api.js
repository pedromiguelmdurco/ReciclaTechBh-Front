import axios from "axios";

const api = axios.create({
  baseURL: "http://159.65.34.126/api/",
});

export default api;
