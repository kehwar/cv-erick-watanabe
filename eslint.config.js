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
    {},

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
            "style/indent": ["error", 4, {
                ArrayExpression: 1,
                CallExpression: { arguments: 1 },
                FunctionDeclaration: { body: 1, parameters: 1 },
                FunctionExpression: { body: 1, parameters: 1 },
                ImportDeclaration: 1,
                MemberExpression: 1,
                ObjectExpression: 1,
                SwitchCase: 1,
                VariableDeclarator: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
                ignoredNodes: [
                    "TemplateLiteral *",
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                    "TSTypeParameterInstantiation",
                    "FunctionExpression > .params[decorators.length > 0]",
                    "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                    "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
                ],
                offsetTernaryExpressions: true,
                outerIIFEBody: 1,
            }],
            "jsonc/indent": ["error", 4],
            "vue/html-indent": ["error", 4],

            // Semi
            "style/semi": ["error", "always"],

            // Quotes
            "style/quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
        },
    },
);
