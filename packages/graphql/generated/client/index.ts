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

export type Animation = {
  __typename?: 'Animation'
  delay?: Maybe<Scalars['Int']['output']>
  duration: Scalars['Int']['output']
  from: Scalars['Float']['output']
  property: Scalars['String']['output']
  repeat?: Maybe<Scalars['Int']['output']>
  to: Scalars['Float']['output']
}

export type Camera = {
  __typename?: 'Camera'
  far?: Maybe<Scalars['Float']['output']>
  fov?: Maybe<Scalars['Float']['output']>
  near?: Maybe<Scalars['Float']['output']>
  type: CameraType
  zoom?: Maybe<Scalars['Float']['output']>
}

export type CameraType = 'ORTHOGRAPHIC' | 'PERSPECTIVE'

export type Geometry = {
  __typename?: 'Geometry'
  colors?: Maybe<Array<Scalars['Float']['output']>>
  indices?: Maybe<Array<Scalars['Int']['output']>>
  normals?: Maybe<Array<Scalars['Float']['output']>>
  params?: Maybe<Scalars['JSON']['output']>
  type: GeometryType
  uvs?: Maybe<Array<Scalars['Float']['output']>>
  vertices?: Maybe<Array<Scalars['Float']['output']>>
}

export type GeometryType =
  | 'BOX'
  | 'CONE'
  | 'CUSTOM'
  | 'CYLINDER'
  | 'SPHERE'
  | 'box'
  | 'cone'
  | 'custom'
  | 'cylinder'
  | 'sphere'

export type Light = {
  __typename?: 'Light'
  angle?: Maybe<Scalars['Float']['output']>
  color?: Maybe<Scalars['String']['output']>
  distance?: Maybe<Scalars['Float']['output']>
  intensity?: Maybe<Scalars['Float']['output']>
  position?: Maybe<Vector3>
  target?: Maybe<Vector3>
  type: LightType
}

export type LightType = 'AMBIENT' | 'DIRECTIONAL' | 'POINT' | 'SPOT'

export type Material = {
  __typename?: 'Material'
  color?: Maybe<Scalars['String']['output']>
  metalness?: Maybe<Scalars['Float']['output']>
  opacity?: Maybe<Scalars['Float']['output']>
  roughness?: Maybe<Scalars['Float']['output']>
  textureUrl?: Maybe<Scalars['String']['output']>
  transparent?: Maybe<Scalars['Boolean']['output']>
  type: MaterialType
}

export type MaterialType = 'BASIC' | 'PHYSICAL' | 'STANDARD'

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
  generateScene: Scene
  generateSceneObject: SceneObject
}

export type MutationGenerateMeshArgs = {
  prompt: Scalars['String']['input']
}

export type MutationGenerateSceneArgs = {
  input: SceneInput
}

export type MutationGenerateSceneObjectArgs = {
  input: SceneObjectInput
}

export type Query = {
  __typename?: 'Query'
  _empty?: Maybe<Scalars['String']['output']>
  getScene?: Maybe<Scene>
}

export type QueryGetSceneArgs = {
  id: Scalars['ID']['input']
}

export type Scene = {
  __typename?: 'Scene'
  background?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  objects: Array<SceneObject>
}

export type SceneInput = {
  prompt: Scalars['String']['input']
}

export type SceneObject = {
  __typename?: 'SceneObject'
  animations?: Maybe<Array<Animation>>
  camera?: Maybe<Camera>
  children?: Maybe<Array<SceneObject>>
  count?: Maybe<Scalars['Int']['output']>
  geometry?: Maybe<Geometry>
  id: Scalars['ID']['output']
  light?: Maybe<Light>
  material?: Maybe<Material>
  name?: Maybe<Scalars['String']['output']>
  position?: Maybe<Vector3>
  rotation?: Maybe<Vector3>
  scale?: Maybe<Vector3>
  type: SceneObjectType
}

export type SceneObjectInput = {
  prompt: Scalars['String']['input']
}

export type SceneObjectType = 'CAMERA' | 'GROUP' | 'LIGHT' | 'MESH'

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

export type AnimationFieldsFragment = {
  __typename?: 'Animation'
  property: string
  from: number
  to: number
  duration: number
  delay?: number | null
  repeat?: number | null
}

export type CameraFieldsFragment = {
  __typename?: 'Camera'
  type: CameraType
  fov?: number | null
  near?: number | null
  far?: number | null
  zoom?: number | null
}

export type GeometryFieldsFragment = {
  __typename?: 'Geometry'
  type: GeometryType
  params?: Record<string, any> | null
  vertices?: Array<number> | null
  indices?: Array<number> | null
  normals?: Array<number> | null
  uvs?: Array<number> | null
  colors?: Array<number> | null
}

export type LightFieldsFragment = {
  __typename?: 'Light'
  type: LightType
  color?: string | null
  intensity?: number | null
  distance?: number | null
  angle?: number | null
  position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
}

export type MaterialFieldsFragment = {
  __typename?: 'Material'
  type: MaterialType
  color?: string | null
  roughness?: number | null
  metalness?: number | null
  transparent?: boolean | null
  opacity?: number | null
}

export type SceneFieldsFragment = {
  __typename?: 'Scene'
  id: string
  background?: string | null
  objects: Array<{
    __typename?: 'SceneObject'
    id: string
    name?: string | null
    type: SceneObjectType
    count?: number | null
    geometry?: {
      __typename?: 'Geometry'
      type: GeometryType
      params?: Record<string, any> | null
      vertices?: Array<number> | null
      indices?: Array<number> | null
      normals?: Array<number> | null
      uvs?: Array<number> | null
      colors?: Array<number> | null
    } | null
    material?: {
      __typename?: 'Material'
      type: MaterialType
      color?: string | null
      roughness?: number | null
      metalness?: number | null
      transparent?: boolean | null
      opacity?: number | null
    } | null
    light?: {
      __typename?: 'Light'
      type: LightType
      color?: string | null
      intensity?: number | null
      distance?: number | null
      angle?: number | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    } | null
    camera?: {
      __typename?: 'Camera'
      type: CameraType
      fov?: number | null
      near?: number | null
      far?: number | null
      zoom?: number | null
    } | null
    position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    animations?: Array<{
      __typename?: 'Animation'
      property: string
      from: number
      to: number
      duration: number
      delay?: number | null
      repeat?: number | null
    }> | null
    children?: Array<{
      __typename?: 'SceneObject'
      id: string
      name?: string | null
      type: SceneObjectType
      count?: number | null
      geometry?: {
        __typename?: 'Geometry'
        type: GeometryType
        params?: Record<string, any> | null
        vertices?: Array<number> | null
        indices?: Array<number> | null
        normals?: Array<number> | null
        uvs?: Array<number> | null
        colors?: Array<number> | null
      } | null
      material?: {
        __typename?: 'Material'
        type: MaterialType
        color?: string | null
        roughness?: number | null
        metalness?: number | null
        transparent?: boolean | null
        opacity?: number | null
      } | null
      light?: {
        __typename?: 'Light'
        type: LightType
        color?: string | null
        intensity?: number | null
        distance?: number | null
        angle?: number | null
        position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      } | null
      camera?: {
        __typename?: 'Camera'
        type: CameraType
        fov?: number | null
        near?: number | null
        far?: number | null
        zoom?: number | null
      } | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      animations?: Array<{
        __typename?: 'Animation'
        property: string
        from: number
        to: number
        duration: number
        delay?: number | null
        repeat?: number | null
      }> | null
    }> | null
  }>
}

export type SceneObjectFieldsFragment = {
  __typename?: 'SceneObject'
  id: string
  name?: string | null
  type: SceneObjectType
  count?: number | null
  geometry?: {
    __typename?: 'Geometry'
    type: GeometryType
    params?: Record<string, any> | null
    vertices?: Array<number> | null
    indices?: Array<number> | null
    normals?: Array<number> | null
    uvs?: Array<number> | null
    colors?: Array<number> | null
  } | null
  material?: {
    __typename?: 'Material'
    type: MaterialType
    color?: string | null
    roughness?: number | null
    metalness?: number | null
    transparent?: boolean | null
    opacity?: number | null
  } | null
  light?: {
    __typename?: 'Light'
    type: LightType
    color?: string | null
    intensity?: number | null
    distance?: number | null
    angle?: number | null
    position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  } | null
  camera?: {
    __typename?: 'Camera'
    type: CameraType
    fov?: number | null
    near?: number | null
    far?: number | null
    zoom?: number | null
  } | null
  position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
  animations?: Array<{
    __typename?: 'Animation'
    property: string
    from: number
    to: number
    duration: number
    delay?: number | null
    repeat?: number | null
  }> | null
  children?: Array<{
    __typename?: 'SceneObject'
    id: string
    name?: string | null
    type: SceneObjectType
    count?: number | null
    geometry?: {
      __typename?: 'Geometry'
      type: GeometryType
      params?: Record<string, any> | null
      vertices?: Array<number> | null
      indices?: Array<number> | null
      normals?: Array<number> | null
      uvs?: Array<number> | null
      colors?: Array<number> | null
    } | null
    material?: {
      __typename?: 'Material'
      type: MaterialType
      color?: string | null
      roughness?: number | null
      metalness?: number | null
      transparent?: boolean | null
      opacity?: number | null
    } | null
    light?: {
      __typename?: 'Light'
      type: LightType
      color?: string | null
      intensity?: number | null
      distance?: number | null
      angle?: number | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    } | null
    camera?: {
      __typename?: 'Camera'
      type: CameraType
      fov?: number | null
      near?: number | null
      far?: number | null
      zoom?: number | null
    } | null
    position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    animations?: Array<{
      __typename?: 'Animation'
      property: string
      from: number
      to: number
      duration: number
      delay?: number | null
      repeat?: number | null
    }> | null
  }> | null
}

export type Vector3FieldsFragment = { __typename?: 'Vector3'; x: number; y: number; z: number }

export type GenerateSceneMutationVariables = Exact<{
  input: SceneInput
}>

export type GenerateSceneMutation = {
  __typename?: 'Mutation'
  generateScene: {
    __typename?: 'Scene'
    id: string
    background?: string | null
    objects: Array<{
      __typename?: 'SceneObject'
      id: string
      name?: string | null
      type: SceneObjectType
      count?: number | null
      geometry?: {
        __typename?: 'Geometry'
        type: GeometryType
        params?: Record<string, any> | null
        vertices?: Array<number> | null
        indices?: Array<number> | null
        normals?: Array<number> | null
        uvs?: Array<number> | null
        colors?: Array<number> | null
      } | null
      material?: {
        __typename?: 'Material'
        type: MaterialType
        color?: string | null
        roughness?: number | null
        metalness?: number | null
        transparent?: boolean | null
        opacity?: number | null
      } | null
      light?: {
        __typename?: 'Light'
        type: LightType
        color?: string | null
        intensity?: number | null
        distance?: number | null
        angle?: number | null
        position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      } | null
      camera?: {
        __typename?: 'Camera'
        type: CameraType
        fov?: number | null
        near?: number | null
        far?: number | null
        zoom?: number | null
      } | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      animations?: Array<{
        __typename?: 'Animation'
        property: string
        from: number
        to: number
        duration: number
        delay?: number | null
        repeat?: number | null
      }> | null
      children?: Array<{
        __typename?: 'SceneObject'
        id: string
        name?: string | null
        type: SceneObjectType
        count?: number | null
        geometry?: {
          __typename?: 'Geometry'
          type: GeometryType
          params?: Record<string, any> | null
          vertices?: Array<number> | null
          indices?: Array<number> | null
          normals?: Array<number> | null
          uvs?: Array<number> | null
          colors?: Array<number> | null
        } | null
        material?: {
          __typename?: 'Material'
          type: MaterialType
          color?: string | null
          roughness?: number | null
          metalness?: number | null
          transparent?: boolean | null
          opacity?: number | null
        } | null
        light?: {
          __typename?: 'Light'
          type: LightType
          color?: string | null
          intensity?: number | null
          distance?: number | null
          angle?: number | null
          position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
          target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        } | null
        camera?: {
          __typename?: 'Camera'
          type: CameraType
          fov?: number | null
          near?: number | null
          far?: number | null
          zoom?: number | null
        } | null
        position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        animations?: Array<{
          __typename?: 'Animation'
          property: string
          from: number
          to: number
          duration: number
          delay?: number | null
          repeat?: number | null
        }> | null
      }> | null
    }>
  }
}

export type GenerateSceneObjectMutationVariables = Exact<{
  input: SceneObjectInput
}>

export type GenerateSceneObjectMutation = {
  __typename?: 'Mutation'
  generateSceneObject: {
    __typename?: 'SceneObject'
    id: string
    name?: string | null
    type: SceneObjectType
    count?: number | null
    geometry?: {
      __typename?: 'Geometry'
      type: GeometryType
      params?: Record<string, any> | null
      vertices?: Array<number> | null
      indices?: Array<number> | null
      normals?: Array<number> | null
      uvs?: Array<number> | null
      colors?: Array<number> | null
    } | null
    material?: {
      __typename?: 'Material'
      type: MaterialType
      color?: string | null
      roughness?: number | null
      metalness?: number | null
      transparent?: boolean | null
      opacity?: number | null
    } | null
    light?: {
      __typename?: 'Light'
      type: LightType
      color?: string | null
      intensity?: number | null
      distance?: number | null
      angle?: number | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    } | null
    camera?: {
      __typename?: 'Camera'
      type: CameraType
      fov?: number | null
      near?: number | null
      far?: number | null
      zoom?: number | null
    } | null
    position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
    animations?: Array<{
      __typename?: 'Animation'
      property: string
      from: number
      to: number
      duration: number
      delay?: number | null
      repeat?: number | null
    }> | null
    children?: Array<{
      __typename?: 'SceneObject'
      id: string
      name?: string | null
      type: SceneObjectType
      count?: number | null
      geometry?: {
        __typename?: 'Geometry'
        type: GeometryType
        params?: Record<string, any> | null
        vertices?: Array<number> | null
        indices?: Array<number> | null
        normals?: Array<number> | null
        uvs?: Array<number> | null
        colors?: Array<number> | null
      } | null
      material?: {
        __typename?: 'Material'
        type: MaterialType
        color?: string | null
        roughness?: number | null
        metalness?: number | null
        transparent?: boolean | null
        opacity?: number | null
      } | null
      light?: {
        __typename?: 'Light'
        type: LightType
        color?: string | null
        intensity?: number | null
        distance?: number | null
        angle?: number | null
        position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      } | null
      camera?: {
        __typename?: 'Camera'
        type: CameraType
        fov?: number | null
        near?: number | null
        far?: number | null
        zoom?: number | null
      } | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      animations?: Array<{
        __typename?: 'Animation'
        property: string
        from: number
        to: number
        duration: number
        delay?: number | null
        repeat?: number | null
      }> | null
    }> | null
  }
}

export type GetSceneQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetSceneQuery = {
  __typename?: 'Query'
  getScene?: {
    __typename?: 'Scene'
    id: string
    background?: string | null
    objects: Array<{
      __typename?: 'SceneObject'
      id: string
      name?: string | null
      type: SceneObjectType
      count?: number | null
      geometry?: {
        __typename?: 'Geometry'
        type: GeometryType
        params?: Record<string, any> | null
        vertices?: Array<number> | null
        indices?: Array<number> | null
        normals?: Array<number> | null
        uvs?: Array<number> | null
        colors?: Array<number> | null
      } | null
      material?: {
        __typename?: 'Material'
        type: MaterialType
        color?: string | null
        roughness?: number | null
        metalness?: number | null
        transparent?: boolean | null
        opacity?: number | null
      } | null
      light?: {
        __typename?: 'Light'
        type: LightType
        color?: string | null
        intensity?: number | null
        distance?: number | null
        angle?: number | null
        position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      } | null
      camera?: {
        __typename?: 'Camera'
        type: CameraType
        fov?: number | null
        near?: number | null
        far?: number | null
        zoom?: number | null
      } | null
      position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
      animations?: Array<{
        __typename?: 'Animation'
        property: string
        from: number
        to: number
        duration: number
        delay?: number | null
        repeat?: number | null
      }> | null
      children?: Array<{
        __typename?: 'SceneObject'
        id: string
        name?: string | null
        type: SceneObjectType
        count?: number | null
        geometry?: {
          __typename?: 'Geometry'
          type: GeometryType
          params?: Record<string, any> | null
          vertices?: Array<number> | null
          indices?: Array<number> | null
          normals?: Array<number> | null
          uvs?: Array<number> | null
          colors?: Array<number> | null
        } | null
        material?: {
          __typename?: 'Material'
          type: MaterialType
          color?: string | null
          roughness?: number | null
          metalness?: number | null
          transparent?: boolean | null
          opacity?: number | null
        } | null
        light?: {
          __typename?: 'Light'
          type: LightType
          color?: string | null
          intensity?: number | null
          distance?: number | null
          angle?: number | null
          position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
          target?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        } | null
        camera?: {
          __typename?: 'Camera'
          type: CameraType
          fov?: number | null
          near?: number | null
          far?: number | null
          zoom?: number | null
        } | null
        position?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        rotation?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        scale?: { __typename?: 'Vector3'; x: number; y: number; z: number } | null
        animations?: Array<{
          __typename?: 'Animation'
          property: string
          from: number
          to: number
          duration: number
          delay?: number | null
          repeat?: number | null
        }> | null
      }> | null
    }>
  } | null
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
export const GeometryFieldsFragmentDoc = gql`
  fragment GeometryFields on Geometry {
    type
    params
    vertices
    indices
    normals
    uvs
    colors
  }
`
export const MaterialFieldsFragmentDoc = gql`
  fragment MaterialFields on Material {
    type
    color
    roughness
    metalness
    transparent
    opacity
  }
`
export const Vector3FieldsFragmentDoc = gql`
  fragment Vector3Fields on Vector3 {
    x
    y
    z
  }
`
export const LightFieldsFragmentDoc = gql`
  fragment LightFields on Light {
    type
    color
    intensity
    position {
      ...Vector3Fields
    }
    distance
    angle
    target {
      ...Vector3Fields
    }
  }
  ${Vector3FieldsFragmentDoc}
`
export const CameraFieldsFragmentDoc = gql`
  fragment CameraFields on Camera {
    type
    fov
    near
    far
    zoom
  }
`
export const AnimationFieldsFragmentDoc = gql`
  fragment AnimationFields on Animation {
    property
    from
    to
    duration
    delay
    repeat
  }
`
export const SceneObjectFieldsFragmentDoc = gql`
  fragment SceneObjectFields on SceneObject {
    id
    name
    type
    geometry {
      ...GeometryFields
    }
    material {
      ...MaterialFields
    }
    light {
      ...LightFields
    }
    camera {
      ...CameraFields
    }
    position {
      ...Vector3Fields
    }
    rotation {
      ...Vector3Fields
    }
    scale {
      ...Vector3Fields
    }
    count
    animations {
      ...AnimationFields
    }
    children {
      id
      name
      type
      geometry {
        ...GeometryFields
      }
      material {
        ...MaterialFields
      }
      light {
        ...LightFields
      }
      camera {
        ...CameraFields
      }
      position {
        ...Vector3Fields
      }
      rotation {
        ...Vector3Fields
      }
      scale {
        ...Vector3Fields
      }
      count
      animations {
        ...AnimationFields
      }
    }
  }
  ${GeometryFieldsFragmentDoc}
  ${MaterialFieldsFragmentDoc}
  ${LightFieldsFragmentDoc}
  ${CameraFieldsFragmentDoc}
  ${Vector3FieldsFragmentDoc}
  ${AnimationFieldsFragmentDoc}
`
export const SceneFieldsFragmentDoc = gql`
  fragment SceneFields on Scene {
    id
    background
    objects {
      ...SceneObjectFields
    }
  }
  ${SceneObjectFieldsFragmentDoc}
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
export const GenerateSceneDocument = gql`
  mutation GenerateScene($input: SceneInput!) {
    generateScene(input: $input) {
      ...SceneFields
    }
  }
  ${SceneFieldsFragmentDoc}
`

/**
 * __useGenerateSceneMutation__
 *
 * To run a mutation, you first call `useGenerateSceneMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSceneMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGenerateSceneMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useGenerateSceneMutation(
  options:
    | VueApolloComposable.UseMutationOptions<GenerateSceneMutation, GenerateSceneMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GenerateSceneMutation,
          GenerateSceneMutationVariables
        >
      > = {},
) {
  return VueApolloComposable.useMutation<GenerateSceneMutation, GenerateSceneMutationVariables>(
    GenerateSceneDocument,
    options,
  )
}
export type GenerateSceneMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GenerateSceneMutation,
  GenerateSceneMutationVariables
>
export const GenerateSceneObjectDocument = gql`
  mutation GenerateSceneObject($input: SceneObjectInput!) {
    generateSceneObject(input: $input) {
      ...SceneObjectFields
    }
  }
  ${SceneObjectFieldsFragmentDoc}
`

/**
 * __useGenerateSceneObjectMutation__
 *
 * To run a mutation, you first call `useGenerateSceneObjectMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSceneObjectMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGenerateSceneObjectMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useGenerateSceneObjectMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GenerateSceneObjectMutation,
        GenerateSceneObjectMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GenerateSceneObjectMutation,
          GenerateSceneObjectMutationVariables
        >
      > = {},
) {
  return VueApolloComposable.useMutation<
    GenerateSceneObjectMutation,
    GenerateSceneObjectMutationVariables
  >(GenerateSceneObjectDocument, options)
}
export type GenerateSceneObjectMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    GenerateSceneObjectMutation,
    GenerateSceneObjectMutationVariables
  >
export const GetSceneDocument = gql`
  query GetScene($id: ID!) {
    getScene(id: $id) {
      ...SceneFields
    }
  }
  ${SceneFieldsFragmentDoc}
`

/**
 * __useGetSceneQuery__
 *
 * To run a query within a Vue component, call `useGetSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSceneQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetSceneQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetSceneQuery(
  variables:
    | GetSceneQueryVariables
    | VueCompositionApi.Ref<GetSceneQueryVariables>
    | ReactiveFunction<GetSceneQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetSceneQuery, GetSceneQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<GetSceneQuery, GetSceneQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<GetSceneQuery, GetSceneQueryVariables>
      > = {},
) {
  return VueApolloComposable.useQuery<GetSceneQuery, GetSceneQueryVariables>(
    GetSceneDocument,
    variables,
    options,
  )
}
export function useGetSceneLazyQuery(
  variables?:
    | GetSceneQueryVariables
    | VueCompositionApi.Ref<GetSceneQueryVariables>
    | ReactiveFunction<GetSceneQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetSceneQuery, GetSceneQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<GetSceneQuery, GetSceneQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<GetSceneQuery, GetSceneQueryVariables>
      > = {},
) {
  return VueApolloComposable.useLazyQuery<GetSceneQuery, GetSceneQueryVariables>(
    GetSceneDocument,
    variables,
    options,
  )
}
export type GetSceneQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetSceneQuery,
  GetSceneQueryVariables
>
