import { generateGeminiResponse } from '../service/gemini.service.js'
import { aiPrompt } from '../utils/aiPrompt.js'
import { loadFromMockFile } from '../utils/loadFromFile.js'
import type { Resolvers } from '@packages/graphql/server'

const sceneResolvers: Resolvers = {
  Mutation: {
    generateScene: async (_, { input }) => {
      // return await loadFromMockFile('scene/test2.json')
      const prompt = aiPrompt(input.prompt)
      const res = await generateGeminiResponse(prompt)
      if (!res) return await loadFromMockFile('scene/test2.json')
      return JSON.parse(res)
    },
  },
}

export default sceneResolvers
