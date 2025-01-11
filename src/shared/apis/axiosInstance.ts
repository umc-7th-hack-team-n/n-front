import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_VERCEL_BASE_URL,
});
