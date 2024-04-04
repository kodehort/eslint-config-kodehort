import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import { defineConfig } from "../util/define-config.js";

export const json = defineConfig([
  {
    ...eslintPluginJsonc.configs["flat/all"],
    files: ["*.json", "*.json5"], // Specify the extension or pattern you want to parse as JSON.
    languageOptions: {
      parser: jsoncParser, // Set this parser.
    },
    plugins: {
      json: eslintPluginJsonc as any,
    },
  },
]);
