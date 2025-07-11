import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { SceneObjectFieldsFragment } from '@packages/graphql/client'
import { createSceneObject } from './createSceneObject'
import { applyAnimationsRecursive } from './animationUtils'
import {
  DEFAULT_AMB_LIGHT,
  DEFAULT_DIR_LIGHT,
  DEFAULT_SCENE,
  SAMPLE_OBJECT,
  SAMPLE_LINE,
} from '@/constants/three'
import { fitCameraToObject } from './fitCameraToObject'
// import { fitCameraToObject } from './fitCameraToObject'

let scene: THREE.Scene
let renderer: THREE.WebGLRenderer
let camera: THREE.PerspectiveCamera
let controls: OrbitControls
const objectMap = new Map<string, THREE.Object3D>()

export function initScene(container: HTMLElement) {
  // renderer 설정
  renderer = new THREE.WebGLRenderer({ antialias: true })
  scene = DEFAULT_SCENE()

  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)

  // camera 및 controls 설정
  camera = new THREE.PerspectiveCamera(
    20,
    container.clientWidth / container.clientHeight,
    0.1,
    1000,
  )
  camera.position.set(0, 5, 15)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.screenSpacePanning = false

  renderer.setSize(container.clientWidth, container.clientHeight)

  // default object
  scene.add(SAMPLE_OBJECT)
  // scene.add(SAMPLE_LINE)
  objectMap.set(SAMPLE_OBJECT.uuid, SAMPLE_OBJECT)

  // default light
  scene.add(DEFAULT_AMB_LIGHT)
  scene.add(DEFAULT_DIR_LIGHT)

  return { scene, renderer, camera, controls }
}

export function addDefaultObjects() {
  if (!scene) return

  if (!objectMap.has(SAMPLE_OBJECT.uuid)) {
    scene.add(SAMPLE_OBJECT)
    objectMap.set(SAMPLE_OBJECT.uuid, SAMPLE_OBJECT)

    fitCameraToObject(camera, SAMPLE_OBJECT, controls)
  }
}

export function setSceneBackground(color: string) {
  if (!scene) return
  scene.background = new THREE.Color(color)
}

export function getScene() {
  return scene
}

export function addSceneObject(sceneObject: SceneObjectFieldsFragment) {
  if (!scene) return

  // 이미 있으면 제거 후 재등록
  if (objectMap.has(sceneObject.id)) {
    const existing = objectMap.get(sceneObject.id)!
    scene.remove(existing)
    objectMap.delete(sceneObject.id)
  }

  const obj = createSceneObject(sceneObject)
  if (!obj) return

  if (obj instanceof THREE.PerspectiveCamera) {
    camera = obj
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
  }

  if (sceneObject.name?.startsWith('MAIN_') && sceneObject.type === 'GROUP') {
    fitCameraToObject(camera, obj, controls)
  }

  scene.add(obj)

  objectMap.set(sceneObject.id, obj)
}

export function removeSceneObject(id: string) {
  if (!scene) return
  const mesh = objectMap.get(id)
  if (mesh) {
    scene.remove(mesh)
    objectMap.delete(id)
  }
}

export function clearScene(removeDefault = true) {
  if (!scene) return
  for (const obj of objectMap.values()) {
    if (removeDefault || obj.uuid !== SAMPLE_OBJECT.uuid) {
      scene.remove(obj)
      objectMap.delete(obj.uuid)
    }
  }
}

export function dispose() {
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.clear()
  }
  if (controls) {
    controls.dispose()
  }
  objectMap.clear()
  // console.log('Scene and resources disposed')
}

export function updateAnimations(delta = 16.67) {
  for (const obj of objectMap.values()) {
    applyAnimationsRecursive(obj, delta)
  }
}

// export function addMesh(meshData: MeshObjectFieldsFragment) {
//   if (!scene) return

//   // 이미 있으면 제거 후 재등록
//   if (meshMap.has(meshData.id)) {
//     const existing = meshMap.get(meshData.id)!
//     scene.remove(existing)
//     meshMap.delete(meshData.id)
//   }

//   const mesh = createMeshFromObject(meshData)
//   scene.add(mesh)
//   meshMap.set(meshData.id, mesh)
//   fitCameraToObject(camera, mesh, controls)
// }
