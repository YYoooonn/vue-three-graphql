import * as THREE from 'three'
import type { SceneObjectFieldsFragment } from '@packages/graphql/client'

const DEFAULT_CAMERA = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)

export function createCamera(obj: SceneObjectFieldsFragment) {
  if (!obj.camera) return DEFAULT_CAMERA

  const { type, fov, near, far } = obj.camera

  let camera: THREE.Camera
  const aspect = window.innerWidth / window.innerHeight

  switch (type) {
    case 'PERSPECTIVE':
      camera = new THREE.PerspectiveCamera(fov ?? 75, aspect, near ?? 0.1, far ?? 1000)
      break
    case 'ORTHOGRAPHIC':
      camera = new THREE.OrthographicCamera(
        (-aspect * (fov ?? 75)) / 2,
        (aspect * (fov ?? 75)) / 2,
        (fov ?? 75) / 2,
        -(fov ?? 75) / 2,
        near ?? 0.1,
        far ?? 1000,
      )
      break
    default:
      console.warn(`Unknown camera type: ${type}, falling back to PerspectiveCamera`)
      camera = DEFAULT_CAMERA
      break
  }

  if (obj.position) camera.position.set(obj.position.x, obj.position.y, obj.position.z)
  if (obj.rotation) camera.rotation.set(obj.rotation.x, obj.rotation.y, obj.rotation.z)

  return camera
}
