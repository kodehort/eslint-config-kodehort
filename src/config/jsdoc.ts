import jsdocPlugin from 'eslint-plugin-jsdoc'

import { defineConfig } from '../util/define-config.js'

export const jsdoc = defineConfig([
  {
    ...jsdocPlugin.configs['flat/recommended'],
    name: 'jsdoc/recommended',
  },
  {
    name: 'jsdoc/overrides',
    plugins: {
      jsdocPlugin,
    },
    rules: {
      'jsdoc/informative-docs': 'error',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-property': 'off',
      'jsdoc/require-returns': 'off',
    },
  },
])
