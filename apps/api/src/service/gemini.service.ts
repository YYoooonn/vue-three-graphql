import { GoogleGenAI } from '@google/genai'
import { sceneResponseSchema } from '../utils/sceneResponseSchema.js'
import dotenv from 'dotenv'

dotenv.config()
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const generationConfig = {
  // stopSequences: ["\n```"], // JSON 블록이 끝났음을 알리는 시퀀스 설정 (AI가 따르지 않을 수 있음)
  maxOutputTokens: 16384, // 최대 출력 토큰 (필요에 따라 조절)
  temperature: 0.9, // 창의성 (0.0 - 1.0, 높을수록 창의적)
  topP: 1,
  topK: 1,
  responseMimeType: 'application/json',
  responseSchema: sceneResponseSchema,
}

export async function generateGeminiResponse(prompt: string, model: string = 'gemini-2.5-flash') {
  try {
    const response = await genAI.models.generateContent({
      model,
      contents: prompt,
      config: generationConfig,
    })
    return response.text
  } catch (error) {
    console.error('Error generating Gemini response:', error)
    throw error
  }
}
