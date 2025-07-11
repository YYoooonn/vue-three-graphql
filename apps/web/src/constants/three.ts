import * as THREE from 'three'
import { BACKGROUND_COLOR } from './color'
import { SHADER_MATERIAL } from './materials'
const TEST_ANIMATION_1 = [
  {
    property: 'rotation.y',
    from: 0,
    to: Math.PI * 2,
    duration: 50000,
    repeat: -1,
  },
  {
    property: 'rotation.x',
    from: 0,
    to: Math.PI * 2,
    duration: 50000,
    repeat: -1,
  },
]

const TEST_ANIMATION_2 = [
  {
    property: 'rotation.y',
    from: 0,
    to: Math.PI * 2,
    duration: 10000,
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

export const SAMPLE_OBJECT = new THREE.Mesh(new THREE.IcosahedronGeometry(2, 30), SHADER_MATERIAL)
SAMPLE_OBJECT.userData.animations = TEST_ANIMATION_1

export const DEFAULT_SCENE = () => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BACKGROUND_COLOR)
  return scene
}

export const DEFAULT_AMB_LIGHT = new THREE.AmbientLight(0xf2f2f2, 2)
export const DEFAULT_DIR_LIGHT = new THREE.DirectionalLight(0xf2f2f2, 1)
DEFAULT_DIR_LIGHT.position.set(0, 1, 1).normalize()
