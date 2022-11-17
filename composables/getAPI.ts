import axios from "axios";
import { useAuthStore } from "~/store/auth";

export const getAPI = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
  headers: {
    accept: "application/json;v=1",
  },
});
