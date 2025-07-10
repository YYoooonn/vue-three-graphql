import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './schema.js'

export async function startServer() {
  const server = new ApolloServer({
    schema: schema,
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
