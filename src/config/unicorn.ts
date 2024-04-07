import pluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "../util/define-config.js";

export const unicorn = defineConfig([
  {
    plugins: { unicorn: pluginUnicorn },
    rules: {
      ...pluginUnicorn.configs.recommended.rules,
      "unicorn/no-nested-ternary": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
]);
