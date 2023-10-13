// @ts-expect-error No type definition
import rollupPluginRaw from "@loonguo/rollup-plugin-raw";
import _ from "lodash";

export default betterDefineNuxtConfig(
    {
        devtools: { enabled: true },
        modules: [
            "@nuxt/ui",
            "@nuxt/devtools",
            "@nuxtjs/tailwindcss",
            "@vueuse/nuxt",
            "nuxt-typed-router",
            "@nuxtjs/i18n",
            "@vue-macros/nuxt",
            "@pinia/nuxt",
            "nuxt-lodash",
        ],
        tailwindcss: {
            viewer: false,
        },
        typescript: {
            strict: true,
            shim: false,
            typeCheck: true,
        },
        i18n: {
            locales: [
                { code: "en", iso: "en-US", name: "English", icon: "i-twemoji-flag-united-states" },
                { code: "es", iso: "es-ES", name: "Español", icon: "i-twemoji-flag-peru" },
            ],
            defaultLocale: "en",
        },
        ui: {
            icons: ["heroicons", "twemoji", "mdi", "bi", "lucide"],
        },
        nitro: {
            prerender: {
                routes: ["/", "/es"],
            },
        },
    },

    /**
     * Rollup plugin for raw files
     *
     * Vite does this by default, but nitro needs this plugin to work
     *
     * @see https://github.com/loonguo/rollup-plugin-raw
     * @see https://vitejs.dev/guide/assets.html#importing-asset-as-string
     */
    {
        nitro: {
            rollupConfig: {
            // @ts-expect-error Type instantiation is excessively deep
                plugins: [
                    rollupPluginRaw({
                        include: ["**/*.txt", "**/*.md"],
                    }),
                ],
            },
        },
        typescript: { tsConfig: { compilerOptions: { types: ["@loonguo/rollup-plugin-raw"] } } },
    },
);

/**
 * Define Nuxt config from multiple configs
 *
 * @see https://lodash.com/docs/#mergeWith
 */
function betterDefineNuxtConfig(...configs: Parameters<typeof defineNuxtConfig>[0][]) {
    return _.mergeWith({}, ...configs, (obj: unknown, src: unknown) => _.isArray(obj) ? obj.concat(src) : undefined);
}
