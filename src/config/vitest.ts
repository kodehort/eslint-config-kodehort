import vitestPlugin from 'eslint-plugin-vitest'

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
      vitest: vitestPlugin as any,
    },
    rules: {
      // @ts-ignore - not sure why this is not working
      ...vitestPlugin.configs?.recommended.rules,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
])
