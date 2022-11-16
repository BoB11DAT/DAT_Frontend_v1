// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from "vite-plugin-eslint";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/global.scss"],
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
});
