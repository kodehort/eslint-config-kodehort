import pluginImport from "eslint-plugin-import";

import { defineConfig } from "../util/define-config.js";

export const imports = defineConfig([
  {
    name: "import",
    plugins: {
      import: pluginImport,
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
    },
    settings: {
      ...pluginImport.configs.typescript.settings,
    },
  },
  {
    name: "import/overrides",
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "type",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
        },
      ],
    },
  },
]);
