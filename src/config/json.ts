import eslintPluginJsonc from 'eslint-plugin-jsonc'

import { defineConfig } from '../util/define-config.js'

export const json = defineConfig([
  Object.assign(
    {},
    ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
    { name: 'json/recommended' },
  ),
])
