// requestMethods.js in background-services directory
import axios from "axios";

// Use the VITE environment variable for the base URL
const BASE_URL = process.env.BACKEND_URL; // Use the environment variable for production

// Create an Axios instance
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// Additional request methods can be defined here if needed