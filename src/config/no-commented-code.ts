import noCommentedCode from "eslint-plugin-no-commented-code";

import { defineConfig } from "../util/define-config.js";

export const comment = defineConfig([
  {
    name: "no-commented-code",
    plugins: { "no-commented-code": noCommentedCode },
    rules: {
      "no-commented-code/no-commented-code": "warn",
    },
  },
]);
