import nodePlugin from 'eslint-plugin-n'
import globals from 'globals'

import { defineConfig } from '../util/define-config.js'

export const node = defineConfig([
  {
    ...nodePlugin.configs['flat/recommended-script'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
