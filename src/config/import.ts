import pluginImport from "eslint-plugin-simple-import-sort";

import { defineConfig } from "../util/define-config.js";

export const imports = defineConfig([
  {
    name: "simple-import-sort",
    plugins: {
      ["simple-import-sort"]: pluginImport,
    },
    rules: {
      // ...pluginImport.rules,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
