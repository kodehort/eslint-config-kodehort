import turboPlugin from 'eslint-plugin-turbo'

import { defineConfig } from '../util/define-config.js'

export const turbo = defineConfig([
  {
    name: 'turbo/recommended',
    plugins: { turbo: turboPlugin },
  },
])
