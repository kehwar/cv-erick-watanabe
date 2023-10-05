/* eslint-disable lodash/prefer-lodash-method */
/* eslint-disable ts/no-unsafe-argument */
/* eslint-disable ts/no-unsafe-assignment */
/* eslint-disable ts/no-unsafe-call */
/* eslint-disable ts/no-unsafe-member-access */

import path from "node:path";
import { fileURLToPath } from "node:url";
import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

/**
 * @see https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
 */
const extend = (() => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const compat = new FlatCompat({
        baseDirectory: __dirname,
    });
    return (configPath) => {
        const configArray = compat.extends(configPath);
        return configArray
        // Only keep the rules
            .filter(config => config.rules != null);
    };
})();

export default antfu(
    {
        stylistic: {
            indent: 4,
            quotes: "double",
        },
    },

    // Extends
    extend("plugin:tailwindcss/recommended"),
    extend("plugin:lodash/recommended"),
    extend("plugin:promise/recommended"),
    extend("plugin:consistent-default-export-name/fixed"),
    extend("plugin:sonarjs/recommended"),

    // Override rules
    {
        rules: {

            // Indent
            "jsonc/indent": ["error", 4],

            // Semi
            "style/semi": ["error", "always"],

        },
    },
);
