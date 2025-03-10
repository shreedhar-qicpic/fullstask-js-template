import axios from "axios";

const api = axios.create({
  baseURL: process.meta.env.VITE_API_URL,
});

api.defaults.withCredentials = true;

export { api };
