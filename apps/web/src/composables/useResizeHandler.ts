import * as THREE from 'three'

export function useResizeHandler(
  container: HTMLElement,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
) {
  const onResize = () => {
    const width = container.clientWidth
    const height = container.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', onResize)

  return () => {
    window.removeEventListener('resize', onResize)
  }
}
