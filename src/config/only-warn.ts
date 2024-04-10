import pluginOnlyWarn from "eslint-plugin-only-warn";

import { defineConfig } from "../util/define-config.js";

export const onlyWarn = defineConfig([
  {
    name: "only-warn",
    plugins: { "only-warn": pluginOnlyWarn },
  },
]);
