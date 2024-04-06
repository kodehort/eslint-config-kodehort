# eslint-config

`eslint-config` is a curated set of ESLint configurations that are used
across our projects and can be used in your projects too. It includes a set of
rules that are designed to help you write clean, maintainable, and error-free code.

## Installation

```sh
pnpm install eslint -D
```

## Usage

To use `eslint-config`, you need to extend it in your ESLint
configuration file. Here's an example `.eslintrc.cjs` file:

```javascript eslint.config.js
import { baseConfig } from "@kodehort/eslint-coonfig";

export default [
  // ... other flatConfig
  ...baseConfig,
  // ...
];
```
