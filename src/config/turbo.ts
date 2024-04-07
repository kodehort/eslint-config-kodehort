import { defineConfig } from "../util/define-config.js";
import turboPlugin from "eslint-plugin-turbo";

export const turbo = defineConfig([
  {
    plugins: { turbo: turboPlugin },
    rules: turboPlugin.configs.recommended.rules,
  },
]);
