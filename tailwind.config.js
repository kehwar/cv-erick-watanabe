// Necessary for eslint-plugin-tailwindcss

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "nuxt.config.ts",
        "themes/**/*.{js,ts,vue}",
        "utilities/**/*.{js,ts,vue}",
    ],
};
