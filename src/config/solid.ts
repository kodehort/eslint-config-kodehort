import * as tsParser from "@typescript-eslint/parser";
import solidPlugin from "eslint-plugin-solid";

export const solidConfig = {
  files: ["*.{ts,tsx}"],
  ...solidPlugin.configs.typescript,
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: "tsconfig.json",
    },
  },
};
