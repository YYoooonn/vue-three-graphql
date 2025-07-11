import * as THREE from 'three'
import type { SceneObjectFieldsFragment } from '@packages/graphql/client'

export function createLight(obj: SceneObjectFieldsFragment) {
  if (!obj.light) return null
  const { type, color, intensity, position } = obj.light
  const c = color ?? '#ffffff'
  const i = intensity ?? 1

  let light: THREE.Light | null = null

  switch (type) {
    case 'AMBIENT':
      return new THREE.AmbientLight(c, i)
    case 'POINT':
      light = new THREE.PointLight(c, i)
      if (position) light.position.set(position.x, position.y, position.z)
      return light
    case 'DIRECTIONAL':
      light = new THREE.DirectionalLight(c, i)
      if (position) light.position.set(position.x, position.y, position.z)
      return light
    case 'SPOT':
      light = new THREE.SpotLight(c, i)
      if (position) light.position.set(position.x, position.y, position.z)
      return light
    default:
      return null
  }
}
