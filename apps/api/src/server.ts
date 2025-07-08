import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './schema.js'
import { resolvers } from './resolvers/mesh.js'
import { makeExecutableSchema } from '@graphql-tools/schema'

export async function startServer() {
  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
  })

  const server = new ApolloServer({
    schema: executableSchema,
    introspection: true, // Enable introspection for development
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              console.log('Server is shutting down...')
            },
          }
        },
      },
    ],
  })

  // Start the server
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀 GraphQL Server ready at ${url}`)
}
