import * as THREE from 'three'

export function useLights(scene: THREE.Scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  const directional = new THREE.DirectionalLight(0xffffff, 1)
  directional.position.set(5, 10, 7.5)

  scene.add(ambient)
  scene.add(directional)
}