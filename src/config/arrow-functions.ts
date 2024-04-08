import functionPlugin from 'eslint-plugin-prefer-arrow-functions'

import { defineConfig } from '../util/define-config.js'

export const arrowFunctions = defineConfig([
  {
    plugins: {
      'prefer-arrow-functions': functionPlugin as any,
    },
    rules: {
      "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        "allowNamedFunctions": false,
        "classPropertiesAllowed": false,
        "disallowPrototype": false,
        "returnStyle": "unchanged",
        "singleReturnOnly": false
      }
    ]
  }

  },
])
