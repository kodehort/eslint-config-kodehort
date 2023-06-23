# eslint-config-kodehort

`eslint-config-kodehort` is a curated set of ESLint configurations that can be
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

2. Next, install `eslint-config-kodehort`, run the following command:

```sh
npm install --save-dev kodehort/eslint-config-kodehort
```

Or:

```sh
pnpm add kodehort/eslint-config-kodehort -D
```

## Usage

To use `eslint-config-kodehort`, you need to extend it in your ESLint
configuration file. Here's an example `.eslintrc.json` file:

```json
{
  "extends": ["@kodehort/eslint-coonfig-kodehort"],
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
- `eslint-plugin-security`: Provides ESLint rules for security vulnerabilities.
- `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
- `eslint-plugin-deprecation`: Provides ...
