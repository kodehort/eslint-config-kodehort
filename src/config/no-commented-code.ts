import noCommentedCode from "eslint-plugin-no-commented-code";
import { defineConfig } from "../util/define-config.js";

export const comment = defineConfig([
  {
    plugins: { "no-commented-code": noCommentedCode },
    rules: {
      "no-commented-code/no-commented-code": "warn",
    },
  },
]);
