import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// ESM에서 __dirname 만들기
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const schema = readFileSync(
  join(__dirname, '../../../packages/graphql/schema.graphql'),
  'utf-8',
)
