module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: [
            './tsconfig.json',
            './tsconfig.eslint.json'
        ]
    },
    plugins: [
        'prettier'
    ],
    rules: {},
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//     jest: true,
//   },
//   extends: [
//     "plugin:react/recommended",
//     "next",
//     "prettier",
//     // "plugin:prettier/recommended"
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: "module",
//   },
//   plugins: ["react", "@typescript-eslint"],
//   // rules: {
//   //     'prettier/prettier':"error"
//   // },
// };
