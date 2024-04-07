import eslintJs from "@eslint/js";
import { defineConfig } from "../util/define-config.js";

export const eslint = defineConfig([
  eslintJs.configs.recommended,
  {
    rules: {
      "no-console": "error",
      "object-shorthand": ["error", "always"],
      "prefer-destructuring": [
        "error",
        { VariableDeclarator: { object: true } },
        { enforceForRenamedProperties: false },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "luxon",
              message: "Please avoid using Luxon in favor of js-joda/core",
            },
          ],
          patterns: ["luxon"],
        },
      ],
    },
  },
]);
