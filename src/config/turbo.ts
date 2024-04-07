import turboPlugin from 'eslint-plugin-turbo'

import { defineConfig } from '../util/define-config.js'

export const turbo = defineConfig([
  {
    plugins: { turbo: turboPlugin },
    rules: turboPlugin.configs.recommended.rules,
  },
])
