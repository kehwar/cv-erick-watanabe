// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/devtools", "@nuxtjs/tailwindcss"],
    tailwindcss: {
        viewer: false,
    },
    nitro: {
        prerender: {
            routes: ["/"],
        },
    },
    typescript: {
        strict: true,
        shim: false,
        typeCheck: true,
    },
});
