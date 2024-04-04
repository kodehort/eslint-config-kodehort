import type { Linter } from "eslint";

import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "../util/define-config.js";

const astroConfig = eslintPluginAstro.configs["flat/recommended"];

const configs = astroConfig.map((config) => ({
  languageOptions: Object.hasOwn(config, "languageOptions")
    ? // @ts-ignore
      (config.languageOptions as Linter.FlatConfig["languageOptions"])
    : {},
  plugins: Object.hasOwn(config, "plugins")
    ? // @ts-ignore
      (config.plugins as Linter.FlatConfig["plugins"])
    : {},
  rules: (config.rules as Linter.FlatConfig["rules"]) || {},
  // @ts-ignore
  settings: (config.settings as Linter.FlatConfig["settings"]) || {},
}));

// @ts-ignore
export const astro = defineConfig([...configs]);
