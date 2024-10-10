import globals from 'globals'

import { defineConfig } from '../util/define-config.js'

export const browser = defineConfig([
  {
    name: 'browser/globals',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
])
