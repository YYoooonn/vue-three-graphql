import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['./operations/**/*.graphql', './fragments.graphql'],
  generates: {
    './generated/client/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config