import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
