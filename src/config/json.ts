import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import { defineConfig } from "../util/define-config.js";

export const json = defineConfig([
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
  {
    files: ["*.json", "*.json5"],
    ignores: ["package.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      json: eslintPluginJsonc as any,
    },
  },
]);
