import { baseConfig } from './lib/index.js'

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.eslint.json'],
      },
    },
    name: 'project/overrides',
  },
]
