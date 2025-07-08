import { useMutation } from '@vue/apollo-composable'
import {
  GenerateMeshDocument,
  type GenerateMeshMutation,
  type GenerateMeshMutationVariables,
} from '@packages/graphql/client'

export function useGenerateMesh() {
  const { mutate, onDone, onError } = useMutation<
    GenerateMeshMutation,
    GenerateMeshMutationVariables
  >(GenerateMeshDocument)

  return { mutate, onDone, onError }
}
