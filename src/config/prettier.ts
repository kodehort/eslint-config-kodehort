import pluginPrettier from 'eslint-plugin-prettier/recommended'

import { defineConfig } from '../util/define-config.js'

export const prettierThisMustBePutLast = defineConfig([
  {
    name: 'prettier/recommended',
    ...pluginPrettier,
  },
])
