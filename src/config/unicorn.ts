import pluginUnicorn from "eslint-plugin-unicorn";

import { defineConfig } from "../util/define-config.js";

export const unicorn = defineConfig([
  {
    name: "unicorn/recommended",
    plugins: { unicorn: pluginUnicorn },
    rules: {
      ...pluginUnicorn.configs.recommended.rules,
      "unicorn/no-nested-ternary": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
]);
