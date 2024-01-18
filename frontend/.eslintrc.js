// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            tsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    ignorePatterns: ["server.js", "**/backend/*.js"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": {
                "multiline": true
            },
            "ImportDeclaration": "never",
            "ExportDeclaration": {
                "multiline": true, "minProperties": 3
            }
        }]
    }
};
