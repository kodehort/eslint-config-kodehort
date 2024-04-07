import jsdocPlugin from 'eslint-plugin-jsdoc'

import { defineConfig } from '../util/define-config.js'

export const jsdoc = defineConfig([
  // configuration included in plugin
  jsdocPlugin.configs['flat/recommended'],
  // other configuration objects...
  {
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
