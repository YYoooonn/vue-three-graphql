import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export function fitCameraToObject(
  camera: THREE.Camera,
  object: THREE.Object3D,
  controls?: OrbitControls,
  offset = 2,
) {
  const box = new THREE.Box3().setFromObject(object)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())

  if (camera instanceof THREE.PerspectiveCamera) {
    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = camera.fov * (Math.PI / 180)
    const distance = maxDim / (2 * Math.tan(fov / 2))

    const direction = new THREE.Vector3(0, 0, 1)
    camera.position.copy(center.clone().add(direction.multiplyScalar(distance * offset)))
    camera.near = distance / 100
    camera.far = distance * 100
    camera.updateProjectionMatrix()
  }

  camera.lookAt(center)
  controls?.target.copy(center)
  controls?.update()
}
