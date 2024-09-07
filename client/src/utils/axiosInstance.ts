// src/utils/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ibios-server.vercel.app/api/", // Base URL for your backend
  timeout: 10000, // Request timeout
});

export default axiosInstance;
