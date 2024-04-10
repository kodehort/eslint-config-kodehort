import type { Linter } from "eslint";

import eslintPluginAstro from "eslint-plugin-astro";

import { defineConfig } from "../util/define-config.js";

const astroConfig = eslintPluginAstro.configs["flat/recommended"];

const configs = astroConfig.map((config) => ({
  languageOptions:
    (config.languageOptions as Linter.FlatConfig["languageOptions"]) || {},
  plugins: (config.plugins as Linter.FlatConfig["plugins"]) || {},
  rules: (config.rules as Linter.FlatConfig["rules"]) || {},
  settings: (config.settings as Linter.FlatConfig["settings"]) || {},
}));

export const astro = defineConfig([...configs]);
