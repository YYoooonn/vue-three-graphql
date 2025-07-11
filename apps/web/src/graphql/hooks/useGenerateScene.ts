import { useMutation } from '@vue/apollo-composable'
import {
  GenerateSceneDocument,
  type GenerateSceneMutation,
  type GenerateSceneMutationVariables,
} from '@packages/graphql/client'

export function useGenerateScene() {
  const { mutate, onDone, onError } = useMutation<
    GenerateSceneMutation,
    GenerateSceneMutationVariables
  >(GenerateSceneDocument)

  return { mutate, onDone, onError }
}
