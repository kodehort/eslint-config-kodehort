import vitestPlugin from "eslint-plugin-vitest";

import { defineConfig } from "../util/define-config.js";

export const vitest = defineConfig([
  {
    languageOptions: {
      globals: {
        ...vitestPlugin.environments.env.globals,
      },
    },
    plugins: {
      vitest: vitestPlugin as any,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
]);
