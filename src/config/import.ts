import pluginImport from 'eslint-plugin-simple-import-sort'

import { defineConfig } from '../util/define-config.js'

export const imports = defineConfig([
  {
    plugins: {
      "simple-import-sort": pluginImport,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
])
