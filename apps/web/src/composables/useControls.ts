import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export function useControls(camera: THREE.Camera, domElement: HTMLElement) {
  const controls = new OrbitControls(camera, domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  return controls
}
