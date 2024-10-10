import * as tsParser from '@typescript-eslint/parser'
import solidPlugin from 'eslint-plugin-solid/configs/typescript'

import { defineConfig } from '../util/define-config.js'

export const config = {
  name: 'solid/typescript',
  ...solidPlugin,
  // languageOptions: {
  //   parser: tsParser,
  //   parserOptions: {
  //     project: "tsconfig.json",
  //   },
  // },
}

export const solid = defineConfig([config])
