/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:n/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:regexp/recommended",
    "plugin:security/recommended",
    "plugin:vitest/recommended",
    "prettier",
    "turbo",
  ],
  /* eslint-disable perfectionist/sort-objects -- https://github.com/azat-io/eslint-plugin-perfectionist/issues/22 */
  overrides: [
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
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        // These off-by-default rules work well for this repo and we like them on.
        "jsdoc/informative-docs": "error",

        // These on-by-default rules don't work well for this repo and we like them off.
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param": "off",
        "jsdoc/require-property": "off",
        "jsdoc/require-returns": "off",
        "perfectionist/sort-named-imports": "off",
      },
    },
    {
      excludedFiles: ["*.md/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        // These off-by-default rules work well for this repo and we like them on.
        "deprecation/deprecation": "error",

        // These more-strict-by-default rules don't work well for this repo and we like them less strict.
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
      files: ["*.json", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": "error",
      },
    },
    {
      files: "*.test.ts",
      rules: {
        // These on-by-default rules aren't useful in test files.
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
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
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "deprecation",
    "import",
    "jsdoc",
    "no-only-tests",
    "perfectionist",
    "regexp",
    "vitest",
  ],
  rules: {
    // These off/less-strict-by-default rules work well for this repo and we like them on.
    "no-only-tests/no-only-tests": "error",

    // These on-by-default rules don't work well for this repo and we like them off.
    "n/no-missing-import": "off",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "no-inner-declarations": "off",

    // Stylistic concerns that don't interfere with Prettier
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
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "**/*.config.mjs",
    "**/*.config.ts",
    "packages/**/**/**",
  ],
  reportUnusedDisableDirectives: true,
  /* eslint-enable perfectionist/sort-objects */
};
