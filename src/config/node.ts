import nodePlugin from "eslint-plugin-n";
import globals from "globals";

import { defineConfig } from "../util/define-config.js";

export const node = defineConfig([
  {
    ...nodePlugin.configs["flat/recommended-script"],
  },
  {
    name: "node/globals",
    languageOptions: {
      globals: globals.node,
    },
    settings: {
      node: {
        tryExtensions: [".js", ".json", ".node", ".ts", ".tsx"],
      },
    },
    rules: {
      "n/no-missing-import": [
        "error",
        {
          allowModules: ["template-typescript-node-package"],
        },
      ],
    },
  },
]);
