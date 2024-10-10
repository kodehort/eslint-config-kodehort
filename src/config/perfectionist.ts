import perfectionistPlugin from 'eslint-plugin-perfectionist'

import { defineConfig } from '../util/define-config.js'

export const perfectionist = defineConfig([
  {
    name: 'perfectionist/natural',
    ...perfectionistPlugin.configs['recommended-natural'],
  },
  {
    name: 'perfectionist/override',
    rules: {
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-imports': 'off',
    },
  },
])
