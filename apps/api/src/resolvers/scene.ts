import { loadFromMockFile } from '../utils/loadFromFile.js'
import type { Resolvers } from '@packages/graphql/server'

const sceneResolvers: Resolvers = {
  Mutation: {
    generateScene: async (_, { input }) => {
      const keyword = input.prompt.toLowerCase()
      // fallback default
      return await loadFromMockFile('scene/test.json')
    },
  },
}

export default sceneResolvers
