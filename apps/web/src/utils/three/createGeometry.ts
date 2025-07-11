import * as THREE from 'three'
import { type SceneObjectFieldsFragment } from '@packages/graphql/client'

const DEFAULT_GEOMETRY = new THREE.BoxGeometry(1, 1, 1)

export function createGeometry(
  geometry: SceneObjectFieldsFragment['geometry'],
): THREE.BufferGeometry {
  if (!geometry) return DEFAULT_GEOMETRY // exception

  const { type, params, vertices, indices } = geometry
  const customGeometry = new THREE.BufferGeometry()

  switch (type) {
    case 'BOX':
      return new THREE.BoxGeometry(params?.width ?? 1, params?.height ?? 1, params?.depth ?? 1)

    case 'CYLINDER':
      return new THREE.CylinderGeometry(
        params?.radiusTop ?? 1,
        params?.radiusBottom ?? 1,
        params?.height ?? 1,
        params?.radialSegments ?? 8,
      )

    case 'CONE':
      return new THREE.ConeGeometry(
        params?.radius ?? 1,
        params?.height ?? 1,
        params?.radialSegments ?? 8,
      )

    case 'CUSTOM':
      if (vertices) {
        customGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      }
      if (indices) {
        customGeometry.setIndex(indices)
      }
      customGeometry.computeVertexNormals()
      return customGeometry

    case 'SPHERE':
      return new THREE.SphereGeometry(
        params?.radius ?? 1,
        params?.widthSegments ?? 32,
        params?.heightSegments ?? 16,
      )
    default:
      console.warn(`Unknown geometry type: ${type}, falling back to BoxGeometry`)
      return DEFAULT_GEOMETRY
  }
}
