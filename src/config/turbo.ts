import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "../util/define-config.js";

const compat = new FlatCompat({});

export const turbo = defineConfig([
  {
    // @ts-ignore
    ...compat.extends["turbo"],
  },
]);
