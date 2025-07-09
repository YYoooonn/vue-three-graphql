import * as THREE from 'three'
import type { MeshObjectFieldsFragment } from '@packages/graphql/client'
import { createGeometry } from '@/utils/three/createGeometry'
import { createMaterial } from '@/utils/three/createMaterial'

export function createMeshFromObject(obj: MeshObjectFieldsFragment): THREE.Object3D {
  const geometry = createGeometry(obj.geometry)
  const material = createMaterial(obj.material)

  const { position, rotation, scale } = obj

  const mesh = new THREE.Mesh(geometry, material)
  if (position) mesh.position.set(position.x, position.y, position.z)
  if (rotation) mesh.rotation.set(rotation.x, rotation.y, rotation.z)
  if (scale) mesh.scale.set(scale.x, scale.y, scale.z)

  obj.children?.forEach((child) => {
    const childMesh = createMeshFromObject(child)
    mesh.add(childMesh)
  })

  return mesh
}
