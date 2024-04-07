import pluginTypescript from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import { defineConfig } from "../util/define-config.js";

export const typescript = defineConfig([
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: false,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypescript as any,
    },
    rules: {
      ...pluginTypescript?.configs?.["recommended"]?.rules,
      ...pluginTypescript?.configs?.["recommended-type-checked"]?.rules,
      ...pluginTypescript?.configs?.["stylistic"]?.rules,
      ...pluginTypescript?.configs?.["stylistic-type-checked"]?.rules,
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
          format: [
            "camelCase",
            "PascalCase", // React.FunctionComponent =
          ],
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
          // eslint-disable-next-line unicorn/no-null
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
