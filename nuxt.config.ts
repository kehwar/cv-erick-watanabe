// @ts-expect-error No type definition
import rollupPluginRaw from "@loonguo/rollup-plugin-raw";
import { isArray, mergeWith } from "lodash";

export default betterDefineNuxtConfig(
    {
        devtools: { enabled: true },
        modules: ["@nuxt/ui", "@nuxt/devtools", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
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
    return mergeWith({}, ...configs, (obj: unknown, src: unknown) => isArray(obj) ? obj.concat(src) : undefined);
}
