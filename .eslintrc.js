module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "@react-native-community",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  rules: {
    indent: "off",
    "linebreak-style": ["error", "unix"],
    "no-useless-escape": "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "no-shadow": "off",
    "react-native/no-inline-styles": "off",
    "react/self-closing-comp": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "prettier/prettier": ["error"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^react$"], ["^@?\\w"], ["^\\u0000"]],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/no-duplicates": ["error", { "prefer-inline": true }],
  },
  ignorePatterns: [
    "**/locales/**/*.json",
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
  ],
};
