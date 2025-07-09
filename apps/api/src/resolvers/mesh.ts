import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import fs from 'fs/promises'

import type { Resolvers } from '@packages/graphql/server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function loadMeshFromFile(name: string) {
  const pathToFile = resolve(__dirname, '../mock/meshes', `${name}.json`)
  const data = await fs.readFile(pathToFile, 'utf-8')
  return JSON.parse(data)
}
export const resolvers: Resolvers = {
  Mutation: {
    generateMesh: async (_, { prompt }) => {
      const keyword = prompt.toLowerCase()

      if (keyword.includes('에펠탑') || keyword.includes('eiffel')) {
        return await loadMeshFromFile('eiffel-tower')
      }
      if (keyword.includes('큐브') || keyword.includes('cube')) {
        return await loadMeshFromFile('cube')
      }

      // fallback default
      return await loadMeshFromFile('default')
    },
  },
}
