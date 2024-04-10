import * as tsParser from "@typescript-eslint/parser";
import solidPlugin from "eslint-plugin-solid";

import { defineConfig } from "../util/define-config.js";

export const solidConfig = {
  name: "solid/typescript",
  plugins: { solid: solidPlugin },
  rules: solidPlugin.configs.typescript.rules,
};

export const solid = defineConfig([solidConfig]);
