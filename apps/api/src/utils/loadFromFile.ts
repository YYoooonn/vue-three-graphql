import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export async function loadFromFile(dir: string) {
  const pathToFile = resolve(__dirname, dir)
  const data = await fs.readFile(pathToFile, 'utf-8')
  return JSON.parse(data)
}

export async function loadFromMockFile(dir: string) {
  const pathToFile = resolve(__dirname, '../mock', dir)
  const data = await fs.readFile(pathToFile, 'utf-8')
  return JSON.parse(data)
}
