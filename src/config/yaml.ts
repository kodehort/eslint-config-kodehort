import eslintPluginYml from "eslint-plugin-yml";
import yamlParser from "yaml-eslint-parser";
import { defineConfig } from "../util/define-config.js";

export const yaml = defineConfig([
  ...eslintPluginYml.configs["flat/standard"],
  ...eslintPluginYml.configs["flat/prettier"],
  {
    files: ["*.yaml", "*.yml"],
    languageOptions: {
      parser: yamlParser,
    },
    rules: {
      "yml/file-extension": ["error", { extension: "yml" }],
      "yml/sort-keys": [
        "error",
        {
          order: { type: "asc" },
          pathPattern: "^.*$",
        },
      ],
      "yml/sort-sequence-values": [
        "error",
        {
          order: { type: "asc" },
          pathPattern: "^.*$",
        },
      ],
    },
  },
]);
