/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import { defineConfig } from "../util/define-config.js";

export const node = defineConfig([
  {
    ...nodePlugin.configs["flat/recommended-script"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
