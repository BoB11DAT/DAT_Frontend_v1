/* eslint-disable no-undef */
import { useAuthStore } from "~/store/auth";
import { getAccessToken } from "~~/composables/accessToken";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  const refreshToken = useCookie("refreshToken");
  if (!refreshToken.value || refreshToken.value === "") {
    return navigateTo("/login");
  }
  if (!authStore.getAccessToken) {
    try {
      authStore.setAccessToken((await getAccessToken()).data.accessToken);
    } catch (e) {
      const route = useRoute();
    }
  }
});
