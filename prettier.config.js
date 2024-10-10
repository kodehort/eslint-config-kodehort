import { baseConfig } from '@kodehort/prettier-config'

export default {
  ...baseConfig,
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<TYPES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@)(app|api|core|e2e|functions|scripts|testing)(/.*)$',
    '',
    '^(~)(/.*)$',
    '',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.1.6',
}
