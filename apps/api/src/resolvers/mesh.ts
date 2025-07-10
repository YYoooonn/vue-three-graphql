import { loadFromMockFile } from '../utils/loadFromFile.js'
import type { Resolvers, SceneObjectResolvers } from '@packages/graphql/server'

const meshResolvers: Resolvers = {
  Mutation: {
    generateSceneObject: async (_, { input }) => {
      const keyword = input.prompt.toLowerCase()

      if (keyword.includes('에펠탑') || keyword.includes('eiffel')) {
        return await loadFromMockFile('mesh/eiffel-tower.json')
      }
      if (keyword.includes('큐브') || keyword.includes('cube')) {
        return await loadFromMockFile('mesh/cube.json')
      }

      // fallback default
      return await loadFromMockFile('mesh/default.json')
    },
  },
}

export default meshResolvers
