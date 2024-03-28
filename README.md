# eslint-config

`eslint-config` is a curated set of ESLint configurations that are used
across our projects and can be used in your projects too. It includes a set of
rules that are designed to help you write clean, maintainable, and error-free code.
It is inspired by the config in [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package)
but with further customisation and intended to be included as a dependency across
our projects. Rather than add this all to a template it is included as a package
enabling updates to be pulled forward into consuming projects.

## Installation

```sh
pnpm install eslint -D
```

## Usage

To use `eslint-config`, you need to extend it in your ESLint
configuration file. Here's an example `.eslintrc.cjs` file:

```javascript .eslintrc.cjs
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    // ... other extends
    "@kodehort/eslint-coonfig",
    // ...
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    // your custom rules here
  },
};
```

```javascript .eslintrc.cjs
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    // ... other extends
    "@kodehort/eslint-coonfig/astro.cjs",
    "@kodehort/eslint-coonfig/solid.cjs",
    // ...
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    // your custom rules here
  },
};
```
