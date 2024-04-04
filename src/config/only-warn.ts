/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import pluginOnlyWarn from "eslint-plugin-only-warn";
import { defineConfig } from "../util/define-config.js";

export const onlyWarn = defineConfig([
  {
    plugins: { "only-warn": pluginOnlyWarn },
  },
]);
