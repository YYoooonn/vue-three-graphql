import { defineStore } from 'pinia'
import type { MeshObjectFieldsFragment } from '@packages/graphql/client'

export interface MeshObject {
  id: string
  name?: string
  geometry: {
    type: 'box' | 'sphere' | 'cylinder' | 'custom'
    params?: Record<string, string | number>
    vertices?: number[]
    indices?: number[]
  }
  material: {
    color?: string
    metalness?: number
    roughness?: number
    textureUrl?: string
  }
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]

  children?: MeshObject[]
}

export const useMeshStore = defineStore('mesh', {
  state: () => ({
    meshes: [] as MeshObjectFieldsFragment[],
  }),
  actions: {
    addMesh(mesh: MeshObjectFieldsFragment) {
      this.meshes.push(mesh)
    },
    clearMeshes() {
      this.meshes = []
    },
  },
})
