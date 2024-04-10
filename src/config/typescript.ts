import type { Linter } from "eslint";
import tseslint from "typescript-eslint";

import { defineConfig } from "../util/define-config.js";

export const typescript = defineConfig([
  ...(tseslint.configs.recommendedTypeChecked as Linter.FlatConfig[]),
  ...(tseslint.configs.stylisticTypeChecked as Linter.FlatConfig[]),
  {
    rules: {
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",

        { prefer: "type-imports" },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "parameter",
          format: ["camelCase"],
        },
        {
          selector: "memberLike",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "function",
          format: [
            "camelCase",
            "PascalCase", // React.FunctionComponent =
          ],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["StrictPascalCase"],
        },
        {
          selector: [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor",
            "enumMember",
          ],
          format: null,
          modifiers: ["requiresQuotes"],
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],
    },
  },
]);
