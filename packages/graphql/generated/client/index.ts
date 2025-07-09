import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import type * as VueCompositionApi from 'vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  JSON: { input: Record<string, any>; output: Record<string, any> }
}

export type Geometry = {
  __typename?: 'Geometry'
  indices?: Maybe<Array<Scalars['Int']['output']>>
  params?: Maybe<Scalars['JSON']['output']>
  type: GeometryType
  vertices?: Maybe<Array<Scalars['Float']['output']>>
}

export type GeometryType = 'box' | 'cone' | 'custom' | 'cylinder' | 'sphere'

export type Material = {
  __typename?: 'Material'
  color?: Maybe<Scalars['String']['output']>
  metalness?: Maybe<Scalars['Float']['output']>
  roughness?: Maybe<Scalars['Float']['output']>
  textureUrl?: Maybe<Scalars['String']['output']>
}

export type MeshObject = {
  __typename?: 'MeshObject'
  children?: Maybe<Array<MeshObject>>
  geometry: Geometry
  id: Scalars['ID']['output']
  material: Material
  name?: Maybe<Scalars['String']['output']>
  position?: Maybe<Vector3>
  rotation?: Maybe<Vector3>
  scale?: Maybe<Vector3>
}

export type Mutation = {
  __typename?: 'Mutation'
  generateMesh: MeshObject
}

export type MutationGenerateMeshArgs = {
  prompt: Scalars['String']['input']
}

export type Query = {
  __typename?: 'Query'
  _empty?: Maybe<Scalars['String']['output']>
}

export type Vector3 = {
  __typename?: 'Vector3'
  x: Scalars['Float']['output']
  y: Scalars['Float']['output']
  z: Scalars['Float']['output']
}

export type MeshObjectFieldsFragment = {
  __typename?: 'MeshObject'
  id: string
  name?: string | null
  position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  geometry: {
    __typename?: 'Geometry'
    type: GeometryType
    params?: Record<string, any> | null
    vertices?: Array<number> | null
    indices?: Array<number> | null
  }
  material: {
    __typename?: 'Material'
    color?: string | null
    metalness?: number | null
    roughness?: number | null
    textureUrl?: string | null
  }
  children?: Array<{
    __typename?: 'MeshObject'
    id: string
    name?: string | null
    position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    geometry: {
      __typename?: 'Geometry'
      type: GeometryType
      params?: Record<string, any> | null
      vertices?: Array<number> | null
      indices?: Array<number> | null
    }
    material: {
      __typename?: 'Material'
      color?: string | null
      metalness?: number | null
      roughness?: number | null
      textureUrl?: string | null
    }
  }> | null
}

export type GenerateMeshMutationVariables = Exact<{
  prompt: Scalars['String']['input']
}>

export type GenerateMeshMutation = {
  __typename?: 'Mutation'
  generateMesh: {
    __typename?: 'MeshObject'
    id: string
    name?: string | null
    position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    geometry: {
      __typename?: 'Geometry'
      type: GeometryType
      params?: Record<string, any> | null
      vertices?: Array<number> | null
      indices?: Array<number> | null
    }
    material: {
      __typename?: 'Material'
      color?: string | null
      metalness?: number | null
      roughness?: number | null
      textureUrl?: string | null
    }
    children?: Array<{
      __typename?: 'MeshObject'
      id: string
      name?: string | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      geometry: {
        __typename?: 'Geometry'
        type: GeometryType
        params?: Record<string, any> | null
        vertices?: Array<number> | null
        indices?: Array<number> | null
      }
      material: {
        __typename?: 'Material'
        color?: string | null
        metalness?: number | null
        roughness?: number | null
        textureUrl?: string | null
      }
    }> | null
  }
}

export const MeshObjectFieldsFragmentDoc = gql`
  fragment MeshObjectFields on MeshObject {
    id
    name
    position {
      x
      y
      z
    }
    rotation {
      x
      y
      z
    }
    scale {
      x
      y
      z
    }
    geometry {
      type
      params
      vertices
      indices
    }
    material {
      color
      metalness
      roughness
      textureUrl
    }
    children {
      id
      name
      position {
        x
        y
        z
      }
      rotation {
        x
        y
        z
      }
      scale {
        x
        y
        z
      }
      geometry {
        type
        params
        vertices
        indices
      }
      material {
        color
        metalness
        roughness
        textureUrl
      }
    }
  }
`
export const GenerateMeshDocument = gql`
  mutation GenerateMesh($prompt: String!) {
    generateMesh(prompt: $prompt) {
      ...MeshObjectFields
    }
  }
  ${MeshObjectFieldsFragmentDoc}
`

/**
 * __useGenerateMeshMutation__
 *
 * To run a mutation, you first call `useGenerateMeshMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGenerateMeshMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGenerateMeshMutation({
 *   variables: {
 *     prompt: // value for 'prompt'
 *   },
 * });
 */
export function useGenerateMeshMutation(
  options:
    | VueApolloComposable.UseMutationOptions<GenerateMeshMutation, GenerateMeshMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<GenerateMeshMutation, GenerateMeshMutationVariables>
      > = {},
) {
  return VueApolloComposable.useMutation<GenerateMeshMutation, GenerateMeshMutationVariables>(
    GenerateMeshDocument,
    options,
  )
}
export type GenerateMeshMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GenerateMeshMutation,
  GenerateMeshMutationVariables
>
