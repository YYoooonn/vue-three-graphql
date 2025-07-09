import * as THREE from 'three'
import type { MeshObjectFieldsFragment } from '@packages/graphql/client'

export function createMaterial(material: MeshObjectFieldsFragment['material']): THREE.Material {
  const mat = new THREE.MeshStandardMaterial({
    color: material.color ?? '#cccccc',
    metalness: material.metalness ?? 0.5,
    roughness: material.roughness ?? 0.5,
  })

  if (material.textureUrl) {
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(material.textureUrl)
    mat.map = texture
  }

  return mat
}
