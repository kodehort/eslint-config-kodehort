# eslint-config

`eslint-config` is a curated set of ESLint configurations that are used across
our projects and can be used in your projects too. It includes a set of rules
that are designed to help you write clean, maintainable, and error-free code.

## Installation

```sh
npm install eslint @kodehort/eslint-config --save-dev

# or

pnpm add eslint @kodehort/eslint-config -D
```

## Usage

To use `eslint-config`, you need to extend it in your ESLint configuration file.
Here's an example `.eslintrc.cjs` file:

```javascript eslint.config.js
import { baseConfig } from '@kodehort/eslint-config'

export default [
  ...baseConfig,
  // ... Project specific configuration
]
```

## Package discovery and file resolution

The dynamic configuration will search for `package.json` files in the current or
child folders of the project. Each `packjage.json` file will be used to define a
path for the ESLint rules. The content of the file will be used to infer the
project type and setup the appropriate ESLint rules.

## Debugging the configuration

Add the following scripts entry to your `package.json` file. This will allow you
to run a command to see the resolved ESLint configuration.

```json
{
  "scripts": {
    "inspect": "eslint --inspect-config"
  }
}
```
