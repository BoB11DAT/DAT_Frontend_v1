/* eslint-disable no-undef */
import { useAuthStore } from "~/store/auth";
import { getAccessToken } from "~~/composables/accessToken";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  if (!authStore.getAccessToken) {
    try {
      authStore.setAccessToken((await getAccessToken()).accessToken);
    } catch (e) {
      authStore.setAccessToken(null);
    }
  }
});
