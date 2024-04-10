import eslintPluginAstro from "eslint-plugin-astro";

import { defineConfig } from "../util/define-config.js";

const astroConfig = eslintPluginAstro.configs["flat/recommended"];

export const astro = defineConfig([
  Object.assign({}, ...astroConfig, { name: "astro/recommended" }),
]);
