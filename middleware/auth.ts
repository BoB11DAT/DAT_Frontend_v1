/* eslint-disable no-undef */
import { useAuthStore } from "~/store/auth";
import { getAccessToken } from "~~/composables/accessToken";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  if (!authStore.getAccessToken) {
    const res = await getAccessToken();
    if (res.response?.status === 401) {
      return navigateTo("/login");
    }
    authStore.setAccessToken(res.accessToken);
  }
});
