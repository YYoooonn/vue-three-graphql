import * as THREE from 'three'
import { type MeshObjectFieldsFragment } from '@packages/graphql/client'

export function createGeometry(
  geometry: MeshObjectFieldsFragment['geometry'],
): THREE.BufferGeometry {
  const { type, params, vertices, indices } = geometry
  const customGeometry = new THREE.BufferGeometry()

  switch (type) {
    case 'box':
      return new THREE.BoxGeometry(params?.width ?? 1, params?.height ?? 1, params?.depth ?? 1)

    case 'sphere':
      return new THREE.SphereGeometry(
        params?.radius ?? 1,
        params?.widthSegments ?? 16,
        params?.heightSegments ?? 12,
      )

    case 'cylinder':
      return new THREE.CylinderGeometry(
        params?.radiusTop ?? 1,
        params?.radiusBottom ?? 1,
        params?.height ?? 1,
        params?.radialSegments ?? 8,
      )

    case 'cone':
      return new THREE.ConeGeometry(
        params?.radius ?? 1,
        params?.height ?? 1,
        params?.radialSegments ?? 8,
      )

    case 'custom':
      if (vertices) {
        customGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      }
      if (indices) {
        customGeometry.setIndex(indices)
      }
      customGeometry.computeVertexNormals()
      return customGeometry

    default:
      console.warn(`Unknown geometry type: ${type}, falling back to BoxGeometry`)
      return new THREE.BoxGeometry(1, 1, 1)
  }
}
