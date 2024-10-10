import eslintPluginYml from 'eslint-plugin-yml'
import yamlParser from 'yaml-eslint-parser'

import { defineConfig } from '../util/define-config.js'

const recommended = eslintPluginYml.configs['flat/recommended']

export const yaml = defineConfig([
  Object.assign({}, ...eslintPluginYml.configs['flat/recommended'], {
    name: 'yaml/recommended',
  }),
  Object.assign({}, ...eslintPluginYml.configs['flat/prettier'], {
    name: 'yaml/prettier',
  }),
  {
    name: 'yaml/overrides',
    files: ['*.yaml', '*.yml', '**/*.yaml', '**/*.yml'],
    languageOptions: {
      parser: yamlParser,
    },
    plugins: {
      yml: eslintPluginYml as any,
    },
    rules: {
      'yml/file-extension': ['error', { extension: 'yaml' }],
      'yml/sort-keys': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^.*$',
        },
      ],
      'yml/sort-sequence-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^.*$',
        },
      ],
    },
  },
])
