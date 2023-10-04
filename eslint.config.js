/* eslint-disable ts/no-unsafe-argument */
/* eslint-disable ts/no-unsafe-member-access */
/* eslint-disable ts/no-unsafe-assignment */
/* eslint-disable ts/no-unsafe-call */

import path from "node:path";
import { fileURLToPath } from "node:url";
import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    ...antfu({
        vue: true,
        componentExts: ["vue"],
        typescript: {
            tsconfigPath: "tsconfig.json",
        },
        rules: {
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
            "style/semi": ["error", "always"],
            "style/quotes": [2, "double", { allowTemplateLiterals: true, avoidEscape: true }],
        },
    }),
    ...compat.extends("plugin:tailwindcss/recommended"),
];
