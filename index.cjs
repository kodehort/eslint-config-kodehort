const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:n/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:regexp/recommended",
    "prettier",
    "turbo",
    "./security.cjs",
    "./vitest.cjs",
  ],
  env: {
    node: true,
  },
  overrides: [
    { files: ["*.?(c)js?(x)", "*.ts?(x)"] },
    {
      extends: ["plugin:markdown/recommended"],
      files: ["*.md"],
      processor: "markdown/markdown",
    },
    {
      extends: [
        "plugin:jsdoc/recommended-typescript-error",
        "plugin:@typescript-eslint/recommended",
      ],
      files: ["*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      rules: {
        "jsdoc/informative-docs": "error",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param": "off",
        "jsdoc/require-property": "off",
        "jsdoc/require-returns": "off",
        "perfectionist/sort-named-imports": "off",
        "perfectionist/sort-imports": "off",
      },
    },
    {
      excludedFiles: ["*.md/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
      files: ["*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      rules: {
        "deprecation/deprecation": "error",
        "@typescript-eslint/no-unnecessary-condition": [
          "error",
          {
            allowConstantLoopConditions: true,
          },
        ],
      },
    },
    {
      excludedFiles: ["package.json"],
      extends: ["plugin:jsonc/recommended-with-json"],
      files: ["*.json?(c)"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": "error",
      },
    },
    {
      files: "*.cjs",
      rules: {
        "import/no-commonjs": "off",
      },
    },
    {
      extends: ["plugin:yml/standard", "plugin:yml/prettier"],
      files: ["*.{yml,yaml}"],
      parser: "yaml-eslint-parser",
      rules: {
        "yml/file-extension": ["error", { extension: "yml" }],
        "yml/sort-keys": [
          "error",
          {
            order: { type: "asc" },
            pathPattern: "^.*$",
          },
        ],
        "yml/sort-sequence-values": [
          "error",
          {
            order: { type: "asc" },
            pathPattern: "^.*$",
          },
        ],
      },
    },
  ],
  plugins: [
    "@typescript-eslint",
    "deprecation",
    "import",
    "jsdoc",
    "no-only-tests",
    "perfectionist",
    "regexp",
  ],
  rules: {
    "no-only-tests/no-only-tests": "error",
    "n/no-missing-import": "off",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "no-inner-declarations": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
  reportUnusedDisableDirectives: true,
};
