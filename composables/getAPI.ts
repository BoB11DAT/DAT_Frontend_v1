import axios from "axios";
import { useAuthStore } from "~/store/auth";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();

export const getAPI = axios.create({
  baseURL: config.public.BaseUrl,
  withCredentials: true,
  headers: {
    accept: "application/json;v=1",
  },
});
