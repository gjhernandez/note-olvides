export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
});
