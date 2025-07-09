import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['./operations/**/*.graphql', './fragments/**/*.graphql'],
  generates: {
    './generated/client/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        useTypeImports: true,
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: 'vue',
        preResolveTypes: true,
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          // enumValues: 'upper-case#upperCase',
        },
        scalars: {
          JSON: 'Record<string, any>',
        },
        dedupeOperationSuffix: true,
        enumsAsTypes: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
}

export default config
