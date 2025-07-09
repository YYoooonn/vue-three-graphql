import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { createMeshFromObject } from './createMeshFromObject'
import type { MeshObjectFieldsFragment } from '@packages/graphql/client'
import { BACKGROUND_COLOR } from '@/constants/color'
import { fitCameraToObject } from './fitCameraToObject'

let scene: THREE.Scene
let renderer: THREE.WebGLRenderer
let camera: THREE.PerspectiveCamera
let controls: OrbitControls
const meshMap = new Map<string, THREE.Object3D>()

export function initScene(container: HTMLElement) {
  // renderer 설정
  renderer = new THREE.WebGLRenderer({ antialias: true })
  scene = new THREE.Scene()
  scene.background = new THREE.Color(BACKGROUND_COLOR)

  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)

  // camera 및 controls 설정
  camera = new THREE.PerspectiveCamera(
    20,
    container.clientWidth / container.clientHeight,
    0.1,
    1000,
  )
  controls = new OrbitControls(camera, renderer.domElement)

  camera.position.set(0, 5, 15)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.screenSpacePanning = false

  const ambientLight = new THREE.AmbientLight(0x404040, 2)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(0, 1, 1).normalize()
  scene.add(directionalLight)

  renderer.setSize(container.clientWidth, container.clientHeight)

  return { scene, renderer, camera, controls }
}

export function getScene() {
  return scene
}

export function addMesh(meshData: MeshObjectFieldsFragment) {
  if (!scene) return

  // 이미 있으면 제거 후 재등록
  if (meshMap.has(meshData.id)) {
    const existing = meshMap.get(meshData.id)!
    scene.remove(existing)
    meshMap.delete(meshData.id)
  }

  const mesh = createMeshFromObject(meshData)
  scene.add(mesh)
  meshMap.set(meshData.id, mesh)
  fitCameraToObject(camera, mesh, controls)
}

export function removeMesh(id: string) {
  if (!scene) return
  const mesh = meshMap.get(id)
  if (mesh) {
    scene.remove(mesh)
    meshMap.delete(id)
  }
}

export function clearScene() {
  if (!scene) return
  for (const mesh of meshMap.values()) {
    scene.remove(mesh)
  }
  meshMap.clear()
}

export function disponse() {
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.clear()
  }
  if (controls) {
    controls.dispose()
  }
  meshMap.clear()
  // console.log('Scene and resources disposed')
}
