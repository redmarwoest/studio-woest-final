import glsl from "vite-plugin-glsl";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [glsl()],
    mode: "client",
  },
  css: ["~/assets/font.css"],
});
