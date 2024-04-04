import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "../util/define-config.js";

export const prettierThisMustBePutLast = defineConfig([
  configPrettier,
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
