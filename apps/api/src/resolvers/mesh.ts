import type { Resolvers } from '@packages/graphql/server'

export const resolvers: Resolvers = {
  Mutation: {
    generateMesh: async (_, args, context) => {
      // context.userId 등 안전하게 사용 가능
      return {
        id: 'mesh-1',
        type: 'cube',
        color: '#00ff00',
        position: [0, 0, 0],
      }
    },
  },
}