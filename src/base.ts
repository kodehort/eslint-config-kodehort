import { prettierThisMustBePutLast } from "./config/prettier.js";
import { astro } from "./config/astro.js";
import { browser } from "./config/browser.js";
import { vitest } from "./config/vitest.js";
import { eslint } from "./config/eslint.js";
import { node } from "./config/node.js";
import { typescript } from "./config/typescript.js";
import { perfectionist } from "./config/perfectionist.js";
import { security } from "./config/security.js";
import { onlyWarn } from "./config/only-warn.js";
import type { Linter } from "eslint";
import { inferPackageTypes } from "./util/infer-package-type.js";
import { unignore } from "./util/unignore.js";
import { turbo } from "./config/turbo.js";
import { jsdoc } from "./config/jsdoc.js";
import { yaml } from "./config/yaml.js";
import { regex } from "./config/regex.js";
import { json } from "./config/json.js";
import { unicorn } from "./config/unicorn.js";

const rootFiles = ["*.js", "*.cjs", "*.mjs", "*.ts"];
const { browserPackages, nodePackages } = await inferPackageTypes();
const browserFiles = browserPackages.map((dir) => `${dir}/**/*.{ts,tsx}`);
const nodeFiles = nodePackages.map((dir) => `${dir}/**/*.ts`);
const astroFiles = browserPackages.map((dir) => `${dir}/**/*.{astro}`);
const testFiles = ["tests/**", "*.test.ts?(x)", "*.spec.ts?(x)"];
const allFiles = [
  ...rootFiles,
  ...browserFiles,
  ...astroFiles,
  ...nodeFiles,
  ...testFiles,
];

export const baseConfig = [
  {
    ignores: ["**/*.d.ts", "node_modules/**", ...unignore(rootFiles)],
  },
  ...browser({ files: [...browserFiles] }),
  ...node({ files: [...rootFiles, ...nodeFiles] }),
  ...eslint({ files: allFiles }),
  // ...typescript({ files: allFiles }),
  ...astro({ files: astroFiles }),
  ...security({ files: allFiles }),
  ...vitest({ files: testFiles }),
  ...perfectionist({ files: allFiles }),
  ...unicorn({ files: allFiles }),
  ...jsdoc({ files: allFiles }),
  ...json(),
  ...yaml(),
  ...regex(),
  ...onlyWarn(),
  ...turbo({ files: allFiles }),
  ...prettierThisMustBePutLast(),
] satisfies Linter.Config[];
