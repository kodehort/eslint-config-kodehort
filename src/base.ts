import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'

import { astro } from './config/astro.js'
import { browser } from './config/browser.js'
import { eslint } from './config/eslint.js'
import { jsdoc } from './config/jsdoc.js'
import { json } from './config/json.js'
import { node } from './config/node.js'
import { onlyWarn } from './config/only-warn.js'
import { perfectionist } from './config/perfectionist.js'
import { prettierThisMustBePutLast } from './config/prettier.js'
import { regex } from './config/regex.js'
import { security } from './config/security.js'
import { solid } from './config/solid.js'
import { typescript } from './config/typescript.js'
import { unicorn } from './config/unicorn.js'
import { vitest } from './config/vitest.js'
import { yaml } from './config/yaml.js'
import { inferPackageTypes } from './util/infer-package-type.js'
import { unignore } from './util/unignore.js'

const rootFiles = ['*.js', '*.cjs', '*.mjs', '*.ts', '*.yaml', '*.json']
const { browserPackages, nodePackages } = await inferPackageTypes()

const browserFiles = browserPackages.map((dir) =>
  dir === '.'
    ? '**/*.{ts,tsx,js,jsx,cjs,mjs}'
    : `${dir}/**/*.{ts,tsx,js,jsx,cjs,mjs}`,
)
const nodeFiles = nodePackages.map((dir) =>
  dir === '.' ? '**/*.{ts,js,cjs,mjs}' : `${dir}/**/*.{ts,js,cjs,mjs}`,
)
const typescriptFiles = nodePackages.map((dir) =>
  dir === '.' ? '**/*.{ts,tsx}' : `${dir}/**/*.{ts,tsx}`,
)
const astroFiles = browserPackages.map((dir) => `${dir}/**/*.{astro}`)
const testFiles = [
  '*.test.ts?(x)',
  '*.spec.ts?(x)',
  '**/*.test.ts?(x)',
  '**/*.spec.ts?(x)',
]
const allFiles = [
  ...rootFiles,
  ...browserFiles,
  ...astroFiles,
  ...nodeFiles,
  ...testFiles,
]

function test() {}

test()

export const baseConfig: Linter.Config | TSESLint.FlatConfig.Config[] = [
  {
    name: 'global ignore',
    ignores: [
      '**/*.d.ts',
      'node_modules/**',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml',
      'package.json',
      '.sst/**',
      '**/dist/**',
      '.turbo/**',
      '**/.turbo/**',
      ...unignore(rootFiles),
    ],
  },
  ...browser({ files: [...browserFiles] }),
  ...node({ files: [...rootFiles, ...nodeFiles] }),
  ...eslint({ files: allFiles }),
  ...typescript({ files: typescriptFiles }),
  ...astro({ files: astroFiles }),
  ...solid({ files: browserFiles }),
  ...security({ files: allFiles }),
  ...vitest({ files: testFiles }),
  ...perfectionist({ files: allFiles }),
  ...unicorn({ files: allFiles }),
  ...jsdoc({ files: allFiles }),
  ...json(),
  ...yaml(),
  ...regex(),
  ...onlyWarn(),
  ...prettierThisMustBePutLast(),
]
