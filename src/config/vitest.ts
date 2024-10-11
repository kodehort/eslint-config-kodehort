import vitestPlugin from '@vitest/eslint-plugin'

import { defineConfig } from '../util/define-config.js'

export const vitest = defineConfig([
  {
    name: 'vitest/recommended',
    languageOptions: {
      globals: {
        ...vitestPlugin.environments.env.globals,
      },
    },
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
])
