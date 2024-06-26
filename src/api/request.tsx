import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
  },
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
