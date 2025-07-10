import { fileURLToPath } from 'url'
import { loadFilesSync } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 경로를 node_modules 기반으로 잡음
const typeDefsArray = loadFilesSync(
  path.resolve(__dirname, '../node_modules/@packages/graphql/**/*.graphql'),
)

const typeDefs = mergeTypeDefs(typeDefsArray)

const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers/**/*.ts')))

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
