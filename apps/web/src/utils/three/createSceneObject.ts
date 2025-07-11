import * as THREE from 'three'
import type { SceneObjectFieldsFragment } from '@packages/graphql/client'
import { createGeometry } from './createGeometry'
import { createMaterial } from './createMaterial'
import { createLight } from './createLight'
import { createCamera } from './createCamera'

export function createSceneObject(sceneObject: SceneObjectFieldsFragment) {
  let obj: THREE.Object3D | null
  switch (sceneObject.type) {
    case 'MESH':
      // Handle mesh-specific logic
      obj = createMesh(sceneObject)
      break
    case 'LIGHT':
      // Handle light-specific logic
      obj = createLight(sceneObject)
      if (obj) obj.castShadow = true
      break
    case 'CAMERA':
      // Handle camera-specific logic
      obj = createCamera(sceneObject)
      break
    case 'GROUP':
      // Handle group-specific logic
      obj = createGroup(sceneObject)
      break
    default:
      console.warn(`Unknown scene object type: ${sceneObject.type}, falling back to Object3D`)
      obj = null
  }
  if (!obj) return null

  obj.name = sceneObject.name || 'Unnamed Object'
  // animation
  if (sceneObject.animations) {
    obj.userData.animations = sceneObject.animations
    obj.userData.animationState = {
      startTime: performance.now(),
    }
  }
  return obj
}

function createMesh(obj: SceneObjectFieldsFragment) {
  const geo = createGeometry(obj.geometry)
  const mat = createMaterial(obj.material)

  const { position, rotation, scale, animations } = obj
  const mesh = new THREE.Mesh(geo, mat)
  if (position) mesh.position.set(position.x, position.y, position.z)
  if (rotation) mesh.rotation.set(rotation.x, rotation.y, rotation.z)
  if (scale) mesh.scale.set(scale.x, scale.y, scale.z)
  if (animations) {
    // Handle animations if present
    // This could involve setting up an AnimationMixer or similar
  }
  obj.children?.forEach((child) => {
    const childObject = createSceneObject(child)
    if (childObject) mesh.add(childObject)
  })
  return mesh
}

function createGroup(obj: SceneObjectFieldsFragment) {
  const group = new THREE.Group()
  obj.children?.forEach((child) => {
    const childObject = createSceneObject(child)
    if (childObject) group.add(childObject)
  })
  if (obj.position) group.position.set(obj.position.x, obj.position.y, obj.position.z)
  if (obj.rotation) group.rotation.set(obj.rotation.x, obj.rotation.y, obj.rotation.z)
  if (obj.scale) group.scale.set(obj.scale.x, obj.scale.y, obj.scale.z)
  // Handle any additional group-specific properties if needed
  return group
}
