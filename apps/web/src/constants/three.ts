import * as THREE from 'three'
import { BACKGROUND_COLOR } from './color'

const TEST_ANIMATION_1 = [
  {
    property: 'rotation.y',
    from: 0,
    to: Math.PI,
    duration: 5000,
    repeat: -1,
  },
  {
    property: 'rotation.x',
    from: 0,
    to: Math.PI,
    duration: 5000,
    repeat: -1,
  },
]

const TEST_ANIMATION_2 = [
  {
    property: 'rotation.y',
    from: 0,
    to: Math.PI,
    duration: 5000,
    repeat: -1,
  },
]

const SAMPLE_LINE_GEOMETRY = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(-1, 0, -1),
  new THREE.Vector3(1, 0, -1),
  new THREE.Vector3(1, 0, 1),
  new THREE.Vector3(-1, 0, 1),
  new THREE.Vector3(-1, 0, -1),
])
const SAMPLE_LINE_MATERIAL = new THREE.LineBasicMaterial({ color: 0x000000 })
export const SAMPLE_LINE = new THREE.Line(SAMPLE_LINE_GEOMETRY, SAMPLE_LINE_MATERIAL)
SAMPLE_LINE.userData.animations = TEST_ANIMATION_2

export const SAMPLE_CUBE = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x00aaff }),
)
SAMPLE_CUBE.userData.animations = TEST_ANIMATION_1

export const DEFAULT_SCENE = () => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BACKGROUND_COLOR)
  return scene
}

export const DEFAULT_AMB_LIGHT = new THREE.AmbientLight(0xf2f2f2, 2)
export const DEFAULT_DIR_LIGHT = new THREE.DirectionalLight(0xf2f2f2, 1)
DEFAULT_DIR_LIGHT.position.set(0, 1, 1).normalize()
