# eslint-config

`eslint-config` is a curated set of ESLint configurations that can be
across our projects and can be used in your projects. It includes a set of
rules that are designed to help you write clean, maintainable, and error-free code.
It is inspired by the config in [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package)
but with further customisation and intended to be included as a dependency across
our projects. Rather than add this all to a template it is included as a package
enabling updates to be pulled forward into consuming projects.

## Installation

1. You'll first need to install [ESLint](https://eslint.org/):

```sh
npm install eslint --save-dev
```

2. Next, install `@kodehort/eslint-config`, run the following command:

```sh
npm install --save-dev @kodehort/eslint-config
```

Or:

```sh
pnpm add @kodehort/eslint-config -D
```

## Usage

To use `eslint-config`, you need to extend it in your ESLint
configuration file. Here's an example `.eslintrc.cjs` file:

```javascript
{
  extends: [
    // ... other extends
    "@kodehort/eslint-coonfig"
    // ...
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
    ],
  },
  root: true,
  rules: {
    // your custom rules here
  }
}
```
