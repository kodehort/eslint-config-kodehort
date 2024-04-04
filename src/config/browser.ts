/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import globals from "globals";
import { defineConfig } from "../util/define-config.js";

export const browser = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },
  },
]);
