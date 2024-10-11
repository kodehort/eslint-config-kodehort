import solidPlugin from 'eslint-plugin-solid/configs/typescript'

import { defineConfig } from '../util/define-config.js'

export const config = {
  name: 'solid/typescript',
  ...solidPlugin,
}

export const solid = defineConfig([config])
