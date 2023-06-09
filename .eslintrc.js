module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: "airbnb-base",
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        quotes: [2, "double"],
        indent: ["error", 4],
    },
};
