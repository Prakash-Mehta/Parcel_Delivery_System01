import axios from "axios";
// const BASE_URL="http://localhost:5000/api/v1/";
const BASE_URL=import.meta.env.VITE_BACKEND_URL;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });