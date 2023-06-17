# eslint-config-kodehort

`eslint-config-kodehort` is a curated set of ESLint configurations that can be
across our projects and can be used in your projects. It includes a set of
rules that are designed to help you write clean, maintainable, and error-free code.

## Installation

To install `eslint-config-kodehort`, run the following command:

```sh
npm install --save-dev kodehort/eslint-config-kodehort
```

## Usage

To use `eslint-config-kodehort`, you need to extend it in your ESLint
configuration file. Here's an example `.eslintrc.json` file:

```json
{
  "extends": ["kodehort"],
  "rules": {
    // your custom rules here
  }
}
```

## Included Packages

`eslint-config-kodehort` includes the following packages:

- `@typescript-eslint/eslint-plugin`: Provides ESLint rules specific to TypeScript.
- `@typescript-eslint/parser`: Parses TypeScript code for ESLint.
- `eslint-config-next`: Provides ESLint rules for Next.js projects.
- `eslint-config-turbo`: Provides ESLint rules for Turbo projects.
- `eslint-plugin-react`: Provides ESLint rules for React projects.
- `eslint-plugin-security`: Provides ESLint rules for security vulnerabilities.
- `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
- `eslint-plugin-deprecation`: Provides
