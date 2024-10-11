import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'

type Files = Linter.Config['files']

export const defineConfig =
  <T extends Linter.Config | TSESLint.FlatConfig.Config>(
    config: T[] | ((params: { files: NonNullable<Files> }) => T[]),
  ) =>
  ({ files }: { files?: Files } = {}): T[] => {
    if (typeof config === 'function') {
      return config({ files: files ?? [] })
    }
    if (files === undefined || files.length === 0) {
      return config
    }
    return config.map((config) => ({ ...config, files }))
  }
