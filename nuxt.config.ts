// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  css: ["@/styles/global.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_variables.scss";',
        },
      },
    },
  },
  modules: [
    "nuxt-calendly",
    ["@storyblok/nuxt", { accessToken: "p4gGIMh6R6U5xPOUYs5oCgtt" }],
  ],
});
